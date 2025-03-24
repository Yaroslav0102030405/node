const { Schema, model } = require('mongoose');
const { required } = require('yargs');
const Joi = require('joi');

const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegexp = /^\([0-9]{3}\)\$[0-9]{3}-[0-9]{4}$/;

const userSchema = Schema(
  {
    name: { type: String, required: true, minlength: 10, maxlength: 10 },
    email: { type: String, required: true, unique: true, match: emailRegexp },
    phone: {
      type: String,
      required: true,
      min: 10,
      max: 10,
      match: phoneRegexp,
      // validate: {
      //   validator(value) {
      //     return /\d{3}-\d{3}-\d{4}/.test(value);
      //   },
      //   message: (props) => `${props.value} is not a valid phone number!`,
      // },
    },
    status: { type: String, enum: ['customer', 'admin'], default: 'customer' },
  },
  { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().pattern(phoneRegexp).required(),
  status: Joi.string(),
});

const User = model('user', userSchema);

module.exports = { User, joiSchema };
