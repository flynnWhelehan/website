import loadingIcon from './images/loadingIcon.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={loadingIcon} className="App-logo" alt="loadingIcon" />

        <p>
          Website in progress...
        </p>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/flynnwhelehan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with Flynn
        </a>
      </header>

    </div>
  );
}

export default App;
