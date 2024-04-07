import "./BookCard.css";
import { Link } from "react-router-dom";

function BookCard({book}){
    return(
        <Link to={`/books/${book.id}`} className="BookCard">
            <img className="Cover" src={book.cover_image} alt={book.title} />
            <h3 className="Title">{book.title}</h3>
            <p className="Author">{book.author}</p>
        </Link>
    )
}
export default BookCard;