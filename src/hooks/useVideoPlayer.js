import { useState, useEffect } from "react";

const timeConvert = (number) => {
  var minutes = Math.floor(number / 60);
  var seconds = Math.floor(number % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    timeProgress: 0,
    Progress: "00:00",
    duration: 0,
    timeDuration: "00:00",
  });
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      duration: videoElement.current.duration,
      timeDuration: timeConvert(videoElement.current.duration),
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress = timeConvert(videoElement.current.currentTime);
    setPlayerState({
      ...playerState,
      progress: progress,
      timeProgress: videoElement.current.currentTime,
    });
  };
  const handleVideoProgress = (event) => {
    let manualChange = event.target.value;
    videoElement.current.currentTime = manualChange;
    manualChange = timeConvert(manualChange);
    setPlayerState({
      ...playerState,
      progress: manualChange,
      timeProgress: videoElement.current.currentTime,
    });
  };
  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
  };
};

export default useVideoPlayer;
