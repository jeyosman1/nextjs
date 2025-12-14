import React from 'react'
type Book = { id: number; title: string; author: string };
 const BooksPage = async () =>  {
    const response = await fetch('http://localhost:3000/api/db');
    const books = await response.json();
    console.log(books);
  return (
    <div>
        <h1>Books</h1>
        <ul>
            {books.map(book => (
                <li key={book.id}>{book.title}</li>
            ))}
        </ul>
    </div>
  )
}
export default BooksPage;