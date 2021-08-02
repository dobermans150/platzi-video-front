import React from 'react';
import './styles/VideoList.css';
import iconPlay from '../assets/images/icons8-play-64.png';
import iconPlus from '../assets/images/icons8-plus-64.png';

export default function VideoList(props) {
  return (
    <>
      <h2 className="categories__title">{props.title}</h2>

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
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="play"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="plus"
                />
              </div>
              <p className="carousel-item__details--title">
                Titulo descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              className="carousel-item__img"
              src="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <div className="carousel-item__details">
              <div>
                <img
                  className="carousel-item__details--img"
                  src={iconPlay}
                  alt="Play Icon"
                />
                <img
                  className="carousel-item__details--img"
                  src={iconPlus}
                  alt="Plus Icon"
                />
              </div>
              <p className="carousel-item__details--title">
                Título descriptivo
              </p>
              <p className="carousel-item__details--subtitle">
                2019 16+ 114 minutos
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
