export const Book = (props) => {
    const { book } = props;
    return <li>
        <div className="book">
            <h3>{book.name}</h3>
            <p>{book.author}</p>
        </div>
    </li>
}