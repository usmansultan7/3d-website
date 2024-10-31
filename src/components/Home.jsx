import React from 'react';
import '../css/Home.css';
import video from "../assets/BG-video.mp4";

function Home() {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1 className='lab-heading'>CHEMICAL LABORATORY</h1>
        <p>
          Welcome to our state-of-the-art chemical laboratory, where we conduct experiments 
          to explore the fascinating world of chemistry. Our lab is equipped with the latest 
          technology and safety features, ensuring a safe and productive environment for 
          hands-on learning and discovery.
        </p>
        <button className="action-button">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
