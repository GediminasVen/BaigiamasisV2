import React from 'react';
import './assets/css/style.css';

export default function BackAnimation() {
  const particleCount = 200; 

  return (
    <div className="hero-solution hero-solution-wrap" id="wrap">
      <div className="main-wrap">
        <div className="wrap">
          {[...Array(particleCount)].map((_, i) => (
            <div className="c" key={i}></div>
          ))}
        </div>
      </div>
    </div>
  );
}
