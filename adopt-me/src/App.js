import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Lucas" animal="Dog" breed="Labrador" />
      <Pet name="Wishy Woo" animal="Dog" breed="Badachadoo Urugay" />
      <Pet name="Hocus Pocus" animal="Dog" breed="Labrador" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
