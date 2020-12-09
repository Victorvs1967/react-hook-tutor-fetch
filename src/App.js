import './App.css';
import DataFetching1 from './components/DataFetching1';
import DataFetching2 from './components/DataFetching2';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Hook Tutor Fetch</h4>
      </header>
      <main className="App-main">
        <DataFetching1 />
        <DataFetching2 />
      </main>
      <footer className="App-footer">
        <p>by Nabendu</p>
      </footer>
    </div>
  );
};

export default App;
