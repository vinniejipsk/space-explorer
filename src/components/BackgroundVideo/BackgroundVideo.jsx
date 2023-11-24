import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = ({ src }) => {
  return (
    <video autoPlay loop muted className="videoBackground">
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;