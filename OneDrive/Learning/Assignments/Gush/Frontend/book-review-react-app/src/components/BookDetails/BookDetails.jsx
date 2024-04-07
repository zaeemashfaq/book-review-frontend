import "./BookDetails.css";
import UserReview from "../UserReview";
import RatingComponent from "../RatingComponent";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        setBook(res);
        setIsLoading(false);
      });
  }, [id]);
  if (isLoading) {
    return (
      <div className="Loader">
        Loading...
      </div>
    );
  }
  else {
    return (
      <div className="BookDetails">
        <div className="Details">
          <div className="Cover">
            <img src={book.cover_image} alt={book.title} />
          </div>
          <div className="BookInfo">
            <h2 className="Title">{book.title}</h2>
            <h3 className="Author">{book.author}</h3>
            <p className="Description">{book.description}</p>
            <RatingComponent rating={book.overall_rating} />
          </div>
        </div>
        <div className="Reviews">
          <h3>User Reviews:</h3>
          {book.user_reviews.map((user_review, index) => (
            <UserReview key={index} user_review={user_review} />
          ))}
        </div>
      </div>
    );
  }
}
export default BookDetails;