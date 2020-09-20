import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/gaming.jpg'
              text='The game zone is the meeting point to play or watch games, 
              talk with other connected players and make use of the main options of the system'
              label='Gaming'
              path='/services'
            />
            <CardItem
              src='images/hacking.jpg'
              text='Hacking refers to activities that seek to compromise digital devices, 
              such as computers, smartphones, tablets, and even entire networks'
              label='Hacking'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cybersecurity.jpg'
              text='Cybersecurity is the practice of protecting systems, networks from digital attacks.'
              label='Security'
              path='/services'
            />
            <CardItem
              src='images/news.jpg'
              text='Read about how we use tech and digitalization to secure innovation for the 21st century.'
              label='News'
              path='/products'
            />
            <CardItem
              src='images/software.jpg'
              text='Computer software is a collection of data that tell the computer how to work.'
              label='Software'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;