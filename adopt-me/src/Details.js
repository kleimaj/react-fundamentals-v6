import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';
import { withRouter } from 'react-router-dom';
import Carousel from './Carousel';

const Details = (props) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetchDetails();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchDetails() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${props.match.params.id}`
    );
    const json = await res.json();
    setLoading(false);
    setDetails(json.pets[0]);
  }
  const { animal, breed, city, state, description, name, images } = details;
  return (
    <div className="details">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Carousel images={images} />
          <div>
            <h1>{name}</h1>
            <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
            <ThemeContext.Consumer>
              {([theme]) => (
                <button style={{ backgroundColor: theme }}>Adopt {name}</button>
              )}
            </ThemeContext.Consumer>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(Details);
