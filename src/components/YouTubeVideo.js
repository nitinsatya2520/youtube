// YouTubeVideo.js
import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Auto-start the video when component mounts
    if (playerRef.current) {
      const player = playerRef.current.internalPlayer;
      player.playVideo();
    }
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  // Function to replay the video
  const replayVideo = () => {
    if (playerRef.current) {
      const player = playerRef.current.internalPlayer;
      player.seekTo(0); // Seek to the beginning of the video
      player.playVideo(); // Start playing the video
    }
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1, // Auto-start the video
      controls: 1, // Show video controls
      modestbranding: 1, // Hide YouTube logo
    },
  };

  const onEnd = (event) => {
    // When the video ends, replay it
    replayVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onEnd={onEnd}
      ref={playerRef} // Ref to access the player instance
    />
  );
};

export default YouTubeVideo;
