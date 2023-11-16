import React, { useState, useEffect } from 'react';
import image1 from './guywithgun.jpg';
import image2 from './soyboy.png';
import image3 from './weird image 1.png';

const ImagesDisplay = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Change image at the end of each flash cycle (e.g., 1s)
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000); // Matches the animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} style={styles.image} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  imageContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: '20px',
    overflow: 'hidden',
    maxWidth: '100%',
    marginBottom: '20px',
    animation: 'flash 1s infinite',
  }
}

export default ImagesDisplay;
