import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form/immutable";

import inputField from "../form/inputField";
import textAreaField from "../form/textArea";

const ContactForm = ({
  messages,
  handleSubmit,
  isSuccess,
  isError,
  errorMessage
}) => {
  return (
    <div className="contact-form">
      {isSuccess && (
        <div className="notification success">
          <h2>Thank You</h2>
          <p>Thank you for contacting us. We will be in touch shortly.</p>
        </div>
      )}
      {isError && (
        <div className="notification error">
          <p>{errorMessage.error}</p>
        </div>
      )}
      {!isSuccess && (
        <form
          className="form"
          onSubmit={handleSubmit}
          action="/contact/"
          method="post"
        >
          <Field
            name="name"
            label="YOUR NAME"
            component={inputField}
            type="text"
            className="form-field material"
            messages={messages.name}
            required={true}
          />
          <Field
            name="email"
            label="EMAIL ADDRESS"
            component={inputField}
            type="email"
            className="form-field material"
            messages={messages.email}
            required={true}
          />
          <Field
            name="phone"
            label="PHONE"
            component={inputField}
            type="text"
            className="form-field material"
            messages={messages.phone}
            required={true}
          />
          <Field
            name="company"
            label="COMPANY"
            component={inputField}
            type="text"
            className="form-field material"
            messages={messages.company}
            required={true}
          />
          <Field
            name="message"
            label="MESSAGE"
            component={textAreaField}
            className="form-field material single"
            messages={messages.message}
            required={true}
            rows="5"
          />
          <div className="form-field material single">
            <input className="button" type="submit" value="Send message" />
          </div>
        </form>
      )}
    </div>
  );
};

export default reduxForm({ form: "contact" })(ContactForm);
