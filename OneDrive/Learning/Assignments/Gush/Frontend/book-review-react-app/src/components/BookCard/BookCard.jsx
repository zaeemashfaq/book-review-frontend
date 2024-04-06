import "./BookCard.css";

function BookCard({book}){
    return(
        <div className="BookCard">
            <img className="Cover" src={book.cover_image} alt={book.title} />
            <h3 className="Title">{book.title}</h3>
            <p className="Author">{book.author}</p>
    </div>
    )
}
export default BookCard;