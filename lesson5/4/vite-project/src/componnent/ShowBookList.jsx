
// import { nanoid } from 'nanoid';
// import { getBooks, addNewBook } from "../data/books"; 
// import  { useState ,useEffect} from 'react';

// export const ShowBookList = () => {
    
//     const [books, setBooks] = useState(getBooks());
//   useEffect(() => {
//         getBooks().then((data) => {
//             setBooks(data);
//         })
//     }, []);
//     const addBook = (event) => {
//         event.preventDefault();

//         const newBook = {
//             title: event.target.elements['book name'].value, 
//             author: event.target.elements['author name'].value, 
//             id: nanoid(),
//         };

//         event.target.reset();

//         addNewBook(newBook).then(data => {
//             setBooks(data);
//         }).catch(error => {
//             console.error("Error adding book:", error);
//         });
//     }

//     return (
//         <>
//             <h2>Library</h2>
//             <ul style={{ listStyleType: 'none' }}>
//                 {books.map(element => (
//                     <li key={element.id}>{element.title}</li> // Changed to element.title
//                 ))}
//             </ul>
//             <form onSubmit={addBook}>
//                 <input type="text" name="book name" placeholder='Book Name' required /> <br />
//                 <input type="text" name='author name' placeholder='Author Name' required /> <br />
//                 <br />
//                 <button type="submit">Add New Book</button>
//             </form>
//         </>
//     );
// };

import { nanoid } from 'nanoid';
import { getBooks, addNewBook } from "../data/books"; 
import { useState, useEffect } from 'react';

export const ShowBookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks().then((data) => {
            setBooks(data); 
        }).catch(error => {
            console.error("Error fetching books:", error);
        });
    }, []);

    const addBook = (event) => {
        event.preventDefault();

        const newBook = {
            title: event.target.elements['book name'].value, 
            author: event.target.elements['author name'].value, 
            id: nanoid(),
        };

        event.target.reset();

        addNewBook(newBook).then(data => {
            setBooks(prevBooks => [...prevBooks, newBook]); 
        }).catch(error => {
            console.error("Error adding book:", error);
        });
    }

    return (
        <>
            <h2>Library</h2>
            <ul style={{ listStyleType: 'none' }}>
                {books.map(element => (
                    <li key={element.id}>{element.title}</li>
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