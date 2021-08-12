import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import SearchParms from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParms />
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
