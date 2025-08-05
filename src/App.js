import './App.css';

function App() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 Welcome to Harshitha's React World!</h1>
        <p>Today’s date is <strong>{today}</strong></p>
        <p style={{ color: '#61dafb', fontSize: '18px' }}>
          This is your personalized React app! 🎉
        </p>
        <button onClick={() => alert('You clicked me! 😊')}>Click Me</button>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit React Official Site
        </a>
      </header>
    </div>
  );
}

export default App;
