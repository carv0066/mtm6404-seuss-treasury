import React, { useEffect, useState } from 'react';
import ItemForBook from '../components/ItemForBook';


function BooksPage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch('https://seussology.info/api/books')
        .then(response => response.json())
        .then(data => {
          console.log('API Data:', data);
          setBooks(data); // Set books directly if data is an array
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
          setError('Failed to load books');
          setLoading(false);
        });
    }, []);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
  
    return (
      <div>
        <h1>List of Books</h1>
        <div className="books-container">
          {books.length > 0 ? (
            books.map(book => (
              <div className="book-item" key={book.id}>
                <ItemForBook
                  id={book.id}
                  cover_image={book.image}
                  title={book.title}
                />
              </div>
            ))
          ) : (
            <p>No books available.</p>
          )}
        </div>
      </div>
    );
  }
  
  export default BooksPage;