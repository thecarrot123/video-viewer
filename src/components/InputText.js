import React from "react";

const InputText = ({ label, handleOnChange, value, name }) => {
  return (
    <div className="container-input-text">
      <label className="label">{label}</label>
      <input
        type="Number"
        value={value}
        name={name}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default InputText;
