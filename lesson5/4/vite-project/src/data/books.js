import { nanoid } from "nanoid";
const books = [
    { name: "Padael", author: "Maya Keinan", id: nanoid() },
    { name: "Kromo", author: "Zecharia Hofman", id: nanoid() },
    { name: "Dina-dey", author: "Menucha Bekerman", id: nanoid() },
    { name: "Dudi and Eudi", author: "Sara Lion", id: nanoid() }
];

export const getBooks = () => {
    return Promise.resolve(books);
}


export const addNewBook = (book) => {
    books.push(book);
    return Promise.resolve(books);
}

