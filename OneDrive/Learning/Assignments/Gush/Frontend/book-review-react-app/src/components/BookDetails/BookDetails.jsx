import "./BookDetails.css";
import UserReview from "../UserReview";
import RatingComponent from "../RatingComponent";
import RatingInputComponent from "../RatingInputComponent";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [book, setBook] = useState({});
  const [name, setName] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [detailedReview, setDetailedReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // fetch(`http://host.docker.internal:5000/books/${id}`)
    fetch(`http://ec2-13-127-112-45.ap-south-1.compute.amazonaws.com:5000/books/${id}`)
      .then(function (res) {
        console.log(res);
        return res.json();
      })
      .then(function (res) {
        setBook(res);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = () => {
    if (!name || !reviewTitle || !detailedReview) {
      alert("All fields must be filled prior to submitting review!");
    }
    else {
      const reviewData = {
        book_id: book.id,
        reviewer: name,
        review_title: reviewTitle,
        review_detail: detailedReview,
        rating: rating
      };
      // fetch("http://host.docker.internal:5000/user-reviews", {
      fetch("http://ec2-13-127-112-45.ap-south-1.compute.amazonaws.com:5000/user-reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reviewData)
      })
        .then(response => {
          if (response.ok) {
            setName("");
            setReviewTitle("");
            setDetailedReview("");
            setRating(0);
          } else {
            throw new Error("Failed to submit review");
          }
        })
        .catch(error => {
          console.error("Error submitting review:", error);
          alert("Failed to submit review. Please try again later.");
        });
    }
  };

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
            <RatingComponent rating={book.overall_rating} max_rating={5} size={0.75} />
          </div>
        </div>
        <div className="AddReview">
          <h3>Add Review</h3>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Review Title" value={reviewTitle} onChange={(e) => setReviewTitle(e.target.value)} />
          <textarea type="text" placeholder="Detailed Review" value={detailedReview} onChange={(e) => setDetailedReview(e.target.value)} />
          <RatingInputComponent
            rating={rating}
            onRatingChange={setRating}
            max_rating={5}
            size={0.75}
          />
          <button onClick={handleSubmit}>Submit Review</button>
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