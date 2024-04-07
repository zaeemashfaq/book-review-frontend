import BookCard from "../BookCard";
import "./BookList.css";
import { useEffect, useState } from "react";

function BookList({ searchResults }) {

  const [isLoading, setIsLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);

  
useEffect(() =>{
if (!searchResults || searchResults.length === 0) {
  fetch("http://localhost:5000/books")
    .then((res) => res.json())
    .then((res) => {
      setAllBooks(res);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    });
  }
  else{
    setAllBooks(searchResults);
    setIsLoading(false);
  }
}
,[searchResults]);

  if (isLoading) {
    return (
      <div className="Loader">
        Loading...
      </div>
    );
  }
  else {
    return (
      <div className="BookList">
        {allBooks.map(function (book) {
          return (
            <BookCard
              book={book}
            />
          );
        })}
      </div>
    );
  }

}
export default BookList;