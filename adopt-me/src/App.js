import ReactDOM from 'react-dom';
import SearchParms from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParms />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
