import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({ book }) {
    return (
        <div className="BookCard">
            <img className="BookCover" src={book.cover_image} alt={book.title} />
            <div className="BookDetailsContent">
                <Link to={`/books/${book.id}`}>
                    <h3 className="Title">{book.title}</h3>
                </Link>
                <p className="Author">{book.author}</p>
            </div>
        </div>
    )
}
export default BookCard;