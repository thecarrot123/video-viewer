import React, { useState, useEffect } from "react";

const Select = ({ options, label, handleOnChange, value, name }) => {
  const [valuee, setValue] = useState(value);
  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className="container-font-type">
      <label className="label">{label}</label>
      <select
        name={name}
        className="font-type"
        options={options}
        defaultValue={options[0].value}
        value={valuee}
        onChange={handleOnChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
