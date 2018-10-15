import React from "react";
import PropTypes from "prop-types";

const TextArea = props => {
  const {
    input,
    label,
    className,
    readOnly,
    disabled,
    rows,
    messages,
    required,
    meta: { touched, error }
  } = props;

  let barEl = null;

  return (
    <div
      className={`form-field ${className || ""}
        ${messages && messages.length > 0 ? " invalid" : ""}`}
    >
      <textarea
        id={input.name}
        className={input.value ? "has-value" : ""}
        {...input}
        readOnly={readOnly}
        disabled={disabled}
        rows={rows}
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
      <span className="bar" ref={n => (barEl = n)} />
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

TextArea.propTypes = {
  label: PropTypes.string.isRequired
};

export default TextArea;
