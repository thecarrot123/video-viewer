import React, { useRef } from "react";

const VideoUploadButton = ({ onFileChange }) => {
  const inputRef = useRef();

  const handleChoose = (event) => {
    inputRef.current.click();
  };

  return (
    <div className="upload-btn-container">
      <button onClick={handleChoose} className="upload-btn">
        Choose file
      </button>
      <input
        type="file"
        ref={inputRef}
        onChange={onFileChange}
        style={{ display: "none" }}
        accept=".mov,.mp4"
      />

      {!inputRef.current ? (
        <span className="file-name">No File Choosen</span>
      ) : (
        <span className="file-name">{inputRef.current.value}</span>
      )}
    </div>
  );
};

export default VideoUploadButton;
