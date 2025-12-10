
import { nanoid } from 'nanoid';
import { getBooks,addNewBook } from "../data/books";
import { useState, useEffect } from 'react';

export const ShowBookList = () => {
    const [books, setBooks] = useState([]);
   useEffect(() => {
        getBooks().then((data) => {
            setBooks(data);
        })
        .catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);
 
    const addBook = (event) => {
        event.preventDefault();

        const newBook = {
            name: event.target.elements['book name'].value,
            author: event.target.elements['author name'].value,
            id: nanoid(),
        };

        try {
            console.log("book adding", newBook);
             addNewBook(newBook).then(data => {
            setBooks(data);
        }).catch(error => {
            console.error("Error adding book:", error);
        });
            event.target.reset();
        } catch (error) {
            console.error("Error ", error);
        }
        finally {
            console.log("Add book operation completed.");
        }

       
     }

    return (
        <>
            <h1>Library</h1>
            <ul>
                   {books.map(element => (
                    <li key={element.id}>{element.name}</li>
                ))}
            </ul>
           <form onSubmit={addBook}>
                <input type="text" name="book name" placeholder='Book Name' required /> <br />
                <input type="text" name='author name' placeholder='Author Name' required /> <br />
                <br />
                <button type="submit">Add New Book</button>
            </form> 
        </>
    );
};
