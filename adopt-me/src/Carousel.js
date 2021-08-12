import { useState } from 'react';

const Carousel = (props) => {
  const [active] = useState(0);
  const [images] = useState(
    props || ['https://pets-images.dev-apis.com/pets/none.jpg']
  );

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, idx) => (
          <img
            key={photo}
            src={photo}
            className={idx === active ? 'active' : ''}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
