import "./BookDetails.css";
import UserReview from "../UserReview";
import RatingComponent from "../RatingComponent";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  /*
  const book = {
    id: 1,
    title: "To Kill a Mockingbird",
    description: "One of the classic. Once you start reading, you can't put down the book before finishing",
    author: "Harper Lee",
    book_cover_image: "https://fakeimg.pl/667x1000/cc6600",
    overall_rating: 4, // Overall rating value (integer)
    user_reviews: [
      {
        username: "user1",
        user_rating: 5,
        user_review_title: "A Must-Read!",
        user_review: "Excellent book, a must-read!"
      },
      {
        username: "user2",
        user_rating: 4,
        user_review_title: "Enjoyable",
        user_review: "Really enjoyed it."
      },
      {
        username: "user3",
        user_rating: 3,
        user_review_title: "Just Okay",
        user_review: "It was okay, not my favorite."
      },
      {
        username: "user4",
        user_rating: 4,
        user_review_title: "Great Storytelling",
        user_review: "Great storytelling."
      },
      {
        username: "user5",
        user_rating: 5,
        user_review_title: "One of the Best",
        user_review: "One of the best books I've read."
      }
    ]
  };*/
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
  // const { id, title, description, author, book_cover_image, overall_rating, user_reviews } = book;
  if (isLoading) {
    return (
      <div className="Loader">
        Loading...
      </div>
    );
  }
  else {
    /*
    return (
      <div className="BookDetails">
        <div className="Details">
          <div className="Cover">
            <img src={book_cover_image} alt={title} />
          </div>
          <div className="BookInfo">
            <h2 className="Title">{title}</h2>
            <h3 className="Author">{author}</h3>
            <p className="Description">{description}</p>
            <RatingComponent rating={overall_rating} />
          </div>
        </div>
        <div className="Reviews">
          <h3>User Reviews:</h3>
          {user_reviews.map((user_review, index) => (
            <UserReview key={index} user_review={user_review} />
          ))}
        </div>
      </div>
    );*/
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
      </div>
    );
  }
}
export default BookDetails;