import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";


const Search = () => {
  const [books, setBooks] = useState([]);
 
  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };


  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Search Books</h2>
      <button onClick={fetchBooks} className="px-4 py-2 bg-blue-500 text-white rounded mb-4">
        Refresh
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border p-4 shadow-md bg-white">
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Shelf Location: {book.shelfLocation}</p>
            <p>Quantity Left: {book.quantity}</p>
            <QRCode value={book.id.toString()} size={100} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Search;
