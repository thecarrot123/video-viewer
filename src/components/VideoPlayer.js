import React, { useRef } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";
import { MdPauseCircle } from "react-icons/md";
import { MdNotStarted } from "react-icons/md";
import ProgressBar from "./ProgressBar";

const VideoPlayer = ({ source }) => {
  const videoElement = useRef(null);
  const { playerState, togglePlay, handleOnTimeUpdate, handleVideoProgress } =
    useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapper">
        <video
          src={source}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate}
        />
        <div className="controls">
          <div className="actions">
            <button onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <i className="bx bx-play">
                  <MdNotStarted />
                </i>
              ) : (
                <i className="bx bx-pause">
                  <MdPauseCircle />
                </i>
              )}
            </button>
          </div>
          <ProgressBar
            progress={playerState.progress}
            timeProgress={playerState.timeProgress}
            duration={playerState.duration}
            timeDuration={playerState.timeDuration}
            handleVideoProgress={handleVideoProgress}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
