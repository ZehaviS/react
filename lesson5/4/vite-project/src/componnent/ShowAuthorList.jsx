
import { useState, useEffect } from 'react';
import { getBooks } from "../data/books";

export const ShowAuthorList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        }).catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);

    return (
        <>
            <h2>Library</h2>
            <ul>
                {books.map(element => (
                    <li key={element.id}>{element.author}</li>
                ))}
            </ul>
        </>
    );
}