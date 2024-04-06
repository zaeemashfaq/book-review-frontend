import "./UserReview.css";
import RatingComponent from "../RatingComponent";

function UserReview({user_review}){
    const  {username, user_rating, user_review_title, user_review_content } = user_review;
    return(
        <div className="UserReview">
            <div className="UserInfo">
                <p>{username}</p>
                <RatingComponent rating={user_rating} />
                <p className="ReviewTitle">{user_review_title}</p>
            </div>
            <p className="Review">{user_review_content}</p>
        </div>
    );
}
export default UserReview;