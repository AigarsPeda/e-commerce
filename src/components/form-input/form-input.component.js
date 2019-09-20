import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...othetProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...othetProps} />
      {label ? (
        <label
          className={`${
            othetProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
