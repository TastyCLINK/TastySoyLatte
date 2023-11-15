import React from 'react';

const MusicPlayer = () => {
  return (
    <audio controls>
      <source src="path-to-your-music-file.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default MusicPlayer;
