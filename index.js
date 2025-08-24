import admins from "./user.js";

console.log(admins);

import fs from "fs";

import express from "express";
import cors from "cors";
import { url } from "inspector";
import mongoose from "mongoose";

const app = express();

// middlware 1
app.use(cors());

// middlware 3
// Це необхідно для обробки тіла POST-запитів, які містять дані у форматі JSON.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Головна</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Про нас</h1>");
});

app.get("/api/contacts", (req, res) => {
  res.json(admins);
});

app.get("/api/contacts/:id", (req, res) => {
  const { id } = req.params;
  const admin = admins.find((admin) => admin.id === Number(id));

  // Перевіряємо, чи був знайдений адмін.
  if (admin) {
    // Якщо так, повертаємо його дані у форматі JSON.
    res.json(admin);
  } else {
    // Якщо ні, повертаємо статус 404 (Not Found) з відповідним повідомленням.
    res.status(404).json({ message: "Адміністратора не знайдено." });
  }
});

// frontend
fetch("http://localhost:3000/api/contacts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "Andriy" }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Помилка:", error));

app.post("/api/contacts", (req, res) => {
  // Отримуємо дані з тіла запиту.
  const { name } = req.body;

  // Перевіряємо, чи було передано ім'я.
  if (!name) {
    return res.status(400).json({ message: "Поле 'name' є обов'язковим." });
  }
  // Генеруємо новий ID.
  // Беремо ID останнього елемента та збільшуємо його на 1.
  const newId = admins.length > 0 ? admins[admins.length - 1].id + 1 : 1;
  // Створюємо новий об'єкт адміністратора.
  const newAdmin = {
    id: newId,
    name: name,
  };
  // Додаємо нового адміністратора в масив.
  admins.push(newAdmin);
  // Повертаємо нового адміністратора як відповідь.
  // Статус 201 означає, що ресурс був успішно створений.
  res.status(201).json(newAdmin);
});

// ______________________________________________
// Дані, які ми хочемо відправити на сервер для оновлення.
// У цьому випадку - нове ім'я.
const updateAdmin = {
  name: "Yaroslav",
};

// ID адміністратора, якого ми хочемо оновити.
// const adminIdUpdate = 2;

// // Формуємо URL для PUT-запиту.
// const apiUrl = `http://localhost:3000/api/constacts/${adminIdUpdate}`;

// // Використовуємо fetch для відправки запиту.
// fetch(apiUrl, {
//   // Виправлення: метод має бути рядком 'PUT'.
//   method: "PUT",
//   headers: {
//     // Обов'язково вказуємо, що тіло запиту - JSON.
//     "Content-Type": "application/json",
//   },
//   // Виправлення: в body має бути об'єкт з даними для оновлення.
//   body: JSON.stringify(updatedAdminData),
// })
//   .then((response) => {
//     // Перевіряємо статус відповіді.
//     if (!response.ok) {
//       throw new Error(`Помилка HTTP: ${response.status}`);
//     }
//     return response.json(); // Парсимо відповідь як JSON.
//   })
//   .then((data) => {
//     // Обробляємо отримані дані (оновлений об'єкт).
//     console.log("Адміністратора успішно оновлено:", data);
//   })
//   .catch((error) => {
//     // Обробляємо помилки, що виникли під час запиту.
//     console.error("Виникла помилка:", error);
//   });

app.put("/api/contacts/:id", (req, res) => {
  // Отримуємо id з параметрів URL
  const { id } = req.params;
  // Отримуємо нові дані з тіла запиту
  const { name } = req.body;

  // Перевіряємо, чи було надано нове ім'я
  if (!name) {
    return res
      .status(400)
      .json({ message: "Поле 'name' є обов'язковим для оновлення." });
  }
  // Знаходимо індекс адміністратора в масиві
  const adminIndex = admins.findIndex((admin) => admin.id === Number(id));
  // Якщо адміністратора знайдено
  if (adminIndex !== -1) {
    // Оновлюємо ім'я
    admins[adminIndex].name = name;
    res.json(admins[adminIndex]);
  } else {
    res.status(404).json({ message: "Адміністратора не знайдено." });
  }
});

// frontend DELETE-запит (Видалення)
// const adminIdToDelete = 1;

// // Формуємо URL для DELETE-запиту.
// const deleteUrl = `http://localhost:3000/api/contacts/${adminIdToDelete}`;

// fetch(deleteUrl, {
//   method: "DELETE",
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Помилка HTTP: ${response.status}`);
//     }
//     // Відповідь на DELETE-запит може не містити тіла, тому перевіряємо це.
//     const contentType = response.headers.get("content-type");
//     if (contentType && contentType.indexOf("application/json") !== -1) {
//       return response.json();
//     } else {
//       return null;
//     }
//   })
//   .then((data) => {
//     if (data) {
//       console.log("Відповідь сервера:", data);
//     } else {
//       console.log("Адміністратора успішно видалено. Відповідь без тіла.");
//     }
//   })
//   .catch((error) => {
//     console.error("Виникла помилка:", error);
//   });

// DELETE: Видалити адміністратора за ID
app.delete("/api/contacts/:id", (req, res) => {
  const { id } = req.params;
  const adminIndex = admins.findIndex((admin) => admin.id === Number(id));

  if (adminIndex !== -1) {
    admins.slice(adminIndex, 1);
    res.json({ message: "Адміністратора успішно видалено." });
  } else {
    res.status(404).json({ message: "Адміністратора не знайдено." });
  }
});

// middlware 2
app.use((_, res) => {
  res.status(404).send("<h1>Not found</h1>");
});

// app.listen(3000, () => {
//   console.log("Сервер запущено на http://localhost:3000");
// });

// DataBase MongoDB
import dotenv from "dotenv";
dotenv.config();
const { DB_HOST } = process.env;

import mongoose from "mongoose";
import { DB_HOST } from "./config.js";

mongoose
  .connect(DB_HOST, {
    useNewUrlParsel: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connect success");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error);
  });
