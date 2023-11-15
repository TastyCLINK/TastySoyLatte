import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import ImagesDisplay from './ImageDisplay';
import VideoBackground from './VideoBackground';
import videoSource from './video.mp4'; // Adjust the path

const App = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="App">
      <VideoBackground src={videoSource} isMuted={isMuted} />
      <Header />
      <button onClick={() => setIsMuted(!isMuted)} style={styles.toggleAudioButton}>
        {isMuted ? "Unmute" : "Mute"}
      </button>
      <ImagesDisplay />
    </div>
  );
}

const styles = {
  toggleAudioButton: {
    position: 'fixed',
    zIndex: 10, 
    top: 40,
    left: 40 
  }
};

export default App;
