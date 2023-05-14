import React from "react";

const InputText = ({ label, handleOnChange, value, name }) => {
  return (
    <div className="container-text-area">
      <label className="label">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={handleOnChange}
        className="text-area"
        rows="10"
        cols="30"
      ></textarea>
    </div>
  );
};

export default InputText;
