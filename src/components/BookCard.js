import { Link } from "react-router-dom";

const BookCard = (props) => {
    const { book, handleAddToCart } = props;
    const handleClick = (book) => {
        handleAddToCart(book)
    }
    return (
        <div className="book-card">
            <div className="book-card-container">
                <Link to={`/books/${book.isbn13}`}>
                    <img src={book.image} alt='book-cover' />
                </Link>
            </div>
            <p>{book.title}</p>
            <div className="book-card-container">
                <p>{book.price}</p>
                <button onClick={() => handleClick(book)}>Add to Cart</button>
            </div>
        </div>
    )
}
export default BookCard;