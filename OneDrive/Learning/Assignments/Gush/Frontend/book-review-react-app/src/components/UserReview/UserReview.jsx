import "./UserReview.css";
import RatingComponent from "../RatingComponent";

function UserReview({ user_review }) {
    return (
        <div className="UserReview">
            <div className="UserInfo">
                <p>{user_review.username}</p>
                <RatingComponent rating={user_review.review_rating} max_rating={5} size={0.9} />
                <div className="ReviewTitle">{user_review.review_title}</div>
            </div>
            <div className="Review">{user_review.review_detail}</div>
        </div>
    );
}
export default UserReview;