import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/joli-1.mp4' autoPlay loop muted />
      
      <p>Informacione nga me te ndryshmet</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Fillo tani
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Shiko Videon <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;