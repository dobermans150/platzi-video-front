import React from 'react';
import './styles/VideoList.css';
import iconPlay from '../assets/images/icons8-play-64.png';
import iconPlus from '../assets/images/icons8-plus-64.png';

export default function VideoList() {
  return (
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel-item">
          <img
            className="carousel-item__img"
            src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="People"
          />

          <div className="carousel-item__details">
            <div className="">
              <img src={iconPlay} alt="play" />
              <img src={iconPlus} alt="plus" />
            </div>
            <p className="carousel-item__details--title">Titulo descriptivo</p>
            <p className="carousel-item__details--subtitle">
              2019 16+ 114minutos
            </p>
          </div>
        </div>
        <div className="carousel-item"></div>
      </div>
    </section>
  );
}
