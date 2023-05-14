import React, { useState, useRef } from "react";
import AddTextButton from "./AddTextButton";
import Textare from "./Textare";
import InputText from "./InputText";
import Select from "./Select";

const Container = (props) => {
  const [textValues, setTextValues] = useState({
    text: "",
    fontType: "Arial, Helvetica, sans-serif",
    fontSize: 0,
    position: 0,
    submitied: false,
  });
  const fontOptions = [
    { value: "Arial, Helvetica, sans-serif", label: "Arial" },
    { value: "Helvetica, sans-serif", label: "Helvetica" },
    { value: "Verdana, sans-serif", label: "Verdana" },
    { value: "Georgia, serif", label: "Georgia" },
    { value: "Times New Roman, Times, serif", label: "Times New Roman" },
    { value: "Courier New, Courier, monospace", label: "Courier New" },
  ];

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setTextValues({ ...textValues, [name]: value });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    props.setTextValues({ ...textValues, submitied: true });
    setTextValues({
      text: "",
      fontType: "Arial, Helvetica, sans-serif",
      fontSize: 0,
      position: 0,
      submitied: false,
    });
  };

  return (
    <div className="form-subtitle">
      <Textare
        name={"text"}
        label={"Text:"}
        handleOnChange={handleOnChange}
        value={textValues.text}
      />
      <InputText
        name={"fontSize"}
        label={"font size:"}
        handleOnChange={handleOnChange}
        value={textValues.fontSize}
      />
      <InputText
        name={"position"}
        label={"position:"}
        handleOnChange={handleOnChange}
        value={textValues.position}
      />
      <Select
        name={"fontType"}
        options={fontOptions}
        label={"font family:"}
        handleOnChange={handleOnChange}
        value={textValues.fontType}
      />
      <AddTextButton handleOnClick={handleOnClick} />
    </div>
  );
};

export default Container;
