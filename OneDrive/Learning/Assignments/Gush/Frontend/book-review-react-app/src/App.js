import './App.css';
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <body>
      <div className="BookList">
      <BookList/>
      </div>
      </body>
    </div>
  );
}

export default App;
