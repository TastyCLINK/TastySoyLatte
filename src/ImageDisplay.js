import React from 'react';
import image1 from './guywithgun.jpg'; // Adjust the path
import image2 from './soyboy.png';
import image3 from './weird image 1.png'; // Adjust the path

const ImagesDisplay = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={image1} alt="Image 1" style={styles.image1} />
        <img src={image2} alt="Image 2" style={styles.image} />
        <img src={image3} alt="Image 3" style={styles.image} />
      </div>
    </div>
  );
}

// CSS in JS
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
    backgroundColor: 'transparent',
    maxWidth: '100%',
    marginBottom: '20px',
  },
  image1: {
    backgroundColor: 'transparent',
    maxWidth: '120%', // Adjust the size as needed
    marginBottom: '20px',
    animation: 'flash 1s infinite', // Apply the flashing animation
  }
}



export default ImagesDisplay;
