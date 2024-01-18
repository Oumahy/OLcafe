import { useState } from 'react';
import data from '../json/data.json';

const Place = () => {
  const [selectedImage, setselectedImage] = useState(data.places[0].imageUrl);

  return (
    <section className="place section" id="place">
      <div className="place__container container">
        <h2 className="section__title">
          Comfy facilities to make you <br />
          feel good.
        </h2>

        <div className="place__content grid">
          <div className="place__images">
            <img
              src={selectedImage}
              alt=""
              className="place__img-big"
            />
            <div className="place__img-smalls">
              {data.places.map((place, index) => (
                <img
                  key={index}
                  src={place.imageUrl}
                  alt=""
                  className={`place__img-small ${
                    selectedImage === place.imageUrl ? 'active' : ''
                  }`}
                  onClick={() => setselectedImage(place.imageUrl)}
                />
              ))}
            </div>
          </div>

          <div className="place__data">
            <h2 className="place__title">Find your spot</h2>
            <p className="place__description">
              We provide the best place where you can stay productive; <br />
              a warm spot with beautiful design and good vibes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;
