import React from "react";
import "../../styles/input.css"
import PropTypes from "prop-types";

export const Input = ({ label, type, placeholder }) => {
  return (
    <div className="Form__input">
      {type === "checkbox" ? (
        <div className="input__check">
          <input
            type={type}
            placeholder={placeholder}
            className="input"
          />
          <span className="Input__label">{label}</span>
        </div>
      ) : (
        <>
          <label className="Input__label">{label}</label>
          <input
            type={type}
            placeholder={placeholder}
            className="input"
          />
        </>
      )}
    </div>
  );
};

export const TextArea = ({ label, rows, cols, placeholder }) => {
  return (
    <div className="Form__input">
      <label className="Input__label">{label}</label>
      <textarea
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

TextArea.propTypes = {
  label: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
};
