import Joi from "joi";
import JoiMessages from "./helpers/joi-messages";

export const schema = () => {
  return Joi.object().keys({
    name: Joi.string()
      .required()
      .label("Your Name"),
    email: Joi.string()
      .email()
      .required()
      .label("Your Email"),
    phone: Joi.string()
      .required()
      .label("Your Phone"),
    company: Joi.string()
      .required()
      .label("Your Company"),
    message: Joi.string()
      .required()
      .label("Message")
  });
};

export const validationMessages = () => {
  return {
    name: {
      "any.required": "{{label}} is required",
      "any.empty": "{{label}} is required"
    },
    email: {
      "string.email": "{{label}} is not valid",
      "any.required": "{{label}} is required",
      "any.empty": "{{label}} is required"
    },
    phone: {
      "any.required": "{{label}} is required",
      "any.empty": "{{label}} is required"
    },
    company: {
      "any.required": "{{label}} is required",
      "any.empty": "{{label}} is required"
    },
    message: {
      "any.required": "{{label}} is required",
      "any.empty": "{{label}} is required"
    }
  };
};

export const validateContactForm = data =>
  new Promise((resolve, reject) => {
    Joi.validate(
      data,
      schema(),
      { abortEarly: false, allowUnknown: true },
      (errors, values) => {
        if (errors) {
          // transform the error messages into a user-friendly variant
          let errorMessages = JoiMessages.transform(
            errors.details,
            values,
            validationMessages(),
            { singleErrorPerField: true }
          );
          resolve(errorMessages, values);
        }
        resolve();
      }
    );
  });
