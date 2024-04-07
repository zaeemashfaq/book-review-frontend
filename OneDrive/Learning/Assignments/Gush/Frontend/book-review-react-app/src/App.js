import './App.css';
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


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
        <Router>
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
  /*
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
  );*/
  /*
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <body>
        <div className="BookDetails">
      <BookDetails/>
      </div>
      </body>
    </div>
  );*/
}

export default App;
