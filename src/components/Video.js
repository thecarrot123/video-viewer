import React, { useState } from "react";
import ReactPlayer from "react-player";
import VideoUpdateButton from "./VideoUploadButton";
import VideoPlayer from "./VideoPlayer";
import Title from "./Title";

const Video = () => {
  const [source, setSource] = useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };

  return (
    <div className="container">
      <Title title={"Video Viewer"} />
      <VideoUpdateButton onFileChange={handleFileChange} />
      {source && <VideoPlayer source={source} />}
    </div>
  );
};

export default Video;
