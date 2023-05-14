import React, { useState, useEffect } from "react";

export const Subtitle = ({ textValues }) => {
  const [subtitles, setSubtitles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setSubtitles([]);
    setCurrentIndex(0);
  }, [textValues]);

  useEffect(() => {
    const chunks = textValues.text.split(" ");
    setSubtitles(chunks);
  }, [textValues.text]);

  useEffect(() => {
    if (currentIndex < subtitles.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 505); // adjust the delay between each chunk as desired
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, subtitles.length]);

  return (
    <>
      {currentIndex < subtitles.length && (
        <div
          className="subtitle-container"
          style={{
            fontFamily: textValues.fontType,
            fontSize: textValues.fontSize + "px",
            bottom: 60 + textValues.position + "px",
          }}
        >
          {currentIndex < subtitles.length &&
            subtitles.slice(0, currentIndex).join(" ")}
        </div>
      )}
    </>
  );
};
