import React from "react";

const AddTextButton = ({ handleOnClick }) => {
  return (
    <div className="container-add-btn">
      <button className="add-btn" onClick={handleOnClick}>
        Add text
      </button>
    </div>
  );
};

export default AddTextButton;
