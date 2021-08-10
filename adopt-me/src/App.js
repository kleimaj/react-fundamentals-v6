import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { id: 'my-brand' }, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Lucas',
      animal: 'Dog',
      breed: 'Labrador',
    }),
    React.createElement(Pet, {
      name: 'Wishy Woo',
      animal: 'Dog',
      breed: 'Badachadoo Urugay',
    }),
    React.createElement(Pet, {
      name: 'Hocus Pocus',
      animal: 'Dog',
      breed: 'Labrador',
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById('root'));
