import BookCard from "../BookCard";
import "./BookList.css";
import { useEffect,useState } from "react";

function BookList(){
    const [isLoading,setIsLoading] = useState(true);
    const [allBooks,setAllBooks] = useState([]);

    useEffect(() => {
        fetch("https://freetestapi.com/api/v1/books")
          .then(function (res) {
            console.log(res);
            return res.json();
          })
          .then(function (res) {
            setAllBooks(res);
            setIsLoading(false);
          });
        }, []);
    
    if(isLoading){
        return(
            <div className="Loader">
            Loading...
            </div>
        );
    }

    else{
        return(
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