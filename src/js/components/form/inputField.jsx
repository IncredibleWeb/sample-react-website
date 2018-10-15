import React from "react";
import PropTypes from "prop-types";

const TextBox = props => {
  const {
    type = "text",
    input,
    label,
    className = "",
    readOnly,
    disabled,
    messages,
    required,
    meta: { touched, error }
  } = props;

  let barEl = null;

  return (
    <div
      className={`contact-form-field ${className}
        ${messages && messages.length > 0 ? " invalid" : ""}`}
    >
      <input
        id={input.name}
        type={type}
        className={input.value || input.value === 0 ? "has-value" : ""}
        {...input}
        readOnly={readOnly}
        disabled={disabled}
        onKeyUp={e => {
          if (barEl) {
            if (barEl && e.target.value !== "") {
              barEl.classList.add("filled-input");
            } else {
              barEl.classList.remove("filled-input");
            }
          }
        }}
      />
      <span ref={n => (barEl = n)} className="bar" />
      <label htmlFor={input.name}>
        <span>{label}</span>
      </label>
      {required && <span className="required">&#8226;</span>}
      {messages &&
        messages.map((n, index) => {
          return (
            <span key={index} className="error-message">
              {n.message}
            </span>
          );
        })}
    </div>
  );
};

TextBox.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default TextBox;
