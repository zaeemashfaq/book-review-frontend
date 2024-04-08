import BookCard from "../BookCard";
import "./BookList.css";
import { useEffect, useState } from "react";

function BookList({ searchResults }) {

  const [isLoading, setIsLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    if (!searchResults || searchResults.length === 0) {
      // fetch(`http://host.docker.internal:5000/books/paged?page_no=${pageNumber}&page_size=${pageSize}`)
      fetch(`http://ec2-13-127-112-45.ap-south-1.compute.amazonaws.com:5000/books/paged?page_no=${pageNumber}&page_size=${pageSize}`)
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
    else {
      setAllBooks(searchResults);
      setIsLoading(false);
    }
  }
    , [searchResults,pageNumber]);

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber-1);
    }
  }
  const handleNext = () => {
    setPageNumber(pageNumber+1);
  }
  if (isLoading) {
    return (
      <div className="Loader">
        Loading...
      </div>
    );
  }
  else {
    return (
      <div className="ListContainer">
        <div className="BookList">
          {allBooks.map(function (book) {
            return (
              <BookCard
                book={book}
              />
            );
          })}
        </div>
        <div className="PageNavigation">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    );
  }

}
export default BookList;