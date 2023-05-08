import React from "react";

const ProgressBar = ({
  progress,
  handleVideoProgress,
  duration,
  timeDuration,
  timeProgress,
}) => {
  return (
    <div className="conainer-progress">
      <span className="progress-number">
        {progress} / {timeDuration}
      </span>
      <input
        type="range"
        min={0}
        max={duration}
        value={timeProgress}
        onChange={(e) => handleVideoProgress(e)}
      />
    </div>
  );
};

export default ProgressBar;
