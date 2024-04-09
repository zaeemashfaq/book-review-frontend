import './App.css';
import { useEffect, useState } from "react";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // fetch(`http://host.docker.internal:5000/books/search?search_text=${searchText}`)
    fetch(`http://ec2-13-127-112-45.ap-south-1.compute.amazonaws.com:80/books/search?search_text=${searchText}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <input type="text" placeholder="Search by title or author..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <body>
        <Router>
          <Routes>
            <Route path="" element={<BookList searchResults={searchResults} />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </body>
    </div>
  );
}

export default App;
