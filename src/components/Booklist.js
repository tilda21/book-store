import BookCard from "./BookCard";

const Booklist = (props) => {
    return (
        <>
            <h2>Books Available</h2>
            <div className="books-container">
                {
                    props.books.map((book) => (
                        <BookCard  book={book} handleAddToCart={props.handleAddToCart}/>
                    ))
                }
            </div>
        </>
    )
}
export default Booklist;