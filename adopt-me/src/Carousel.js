import { useState, useEffect } from 'react';

const Carousel = (props) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState([
    'http://pets-images.dev-apis.com/pets/none.jpg',
  ]);

  useEffect(() => {
    if (props.images && props.images.length) setImages(props.images);
  }, [props.images]);

  const handleIndexClick = (event) => {
    setActive(+event.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, idx) => (
          // eslint-disable-next-line
          <img
            key={photo}
            src={photo}
            data-index={idx}
            onClick={handleIndexClick}
            className={idx === active ? 'active' : ''}
            alt="animal thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
