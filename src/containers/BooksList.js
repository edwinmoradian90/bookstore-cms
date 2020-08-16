import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => {
  const books = useSelector(state => state.bookStore.books);
  return (
    <div className="booksTable">
      {books.map(book => (
        <div key={`${book} book`} className={book}>
          <Book book={book} />
        </div>
      ))}
    </div>
  );
};

export default BooksList;
