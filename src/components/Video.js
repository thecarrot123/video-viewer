import React, { useState } from "react";
import VideoUpdateButton from "./VideoUploadButton";
import VideoPlayer from "./VideoPlayer";
import Title from "./Title";
import Container from "./Container";
// import { Subtitle } from "./Subtitle";

const Video = () => {
  const [source, setSource] = useState();

  const [textValues, setTextValues] = useState({
    text: "",
    fontType: "Arial, Helvetica, sans-serif",
    fontSize: 0,
    position: 0,
    submitied: false,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  return (
    <div className="container">
      <Title title={"Video Viewer"} />
      <VideoUpdateButton onFileChange={handleFileChange} />
      {source && <VideoPlayer source={source} textValues={textValues} />}
      {source && (
        <Container textValues={textValues} setTextValues={setTextValues} />
      )}
    </div>
  );
};

export default Video;
