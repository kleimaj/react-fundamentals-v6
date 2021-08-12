import { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

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
  const { animal, breed, city, state, description, name } = details;
  return (
    <div className="details">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </>
      )}
    </div>
  );
};

export default withRouter(Details);
