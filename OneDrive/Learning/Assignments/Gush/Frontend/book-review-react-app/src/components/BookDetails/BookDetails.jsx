import "./BookDetails.css";
import UserReview from "../UserReview";

function BookDetails(){
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
  };
  const {id, title, description,  author, book_cover_image, overall_rating, user_reviews} = book;
    return(
        <div className="BookDetails">
            <div className="Cover">
                <img className="Cover" src={book_cover_image} alt={title} />
            </div>
            <div className="Details">
                <div className="Title">
                    <h2>{title}</h2>
                </div>
                <div className="Author">
                    <h2>{author}</h2>
                </div>
                <div className="Description">
                    <h2>{description}</h2>
                </div>
            </div>
            <div className="Reviews">
            <h3>User Reviews:</h3>
            {user_reviews.map(function (user_review) {
              return (
                <UserReview
                user_review={user_review}
                />
              );
            })}
            </div>
    </div>
    );
}
export default BookDetails;