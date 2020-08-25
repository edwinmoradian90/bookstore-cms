import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const dispatch = useDispatch();
  let books = useSelector(state => state.bookStore);
  const filter = useSelector(state => state.filter);
  const handleRemoveBook = bookIndex => {
    dispatch(removeBook(bookIndex));
  };
  const handleFilterChange = category => {
    dispatch(changeFilter(category));
  };

  if (filter !== 'CATEGORIES') {
    books = books.filter(book => book.category === filter);
  }

  return (
    <>
      <Navbar handleFilterChange={handleFilterChange} />
      <div className="booksTable">
        {books.map((book, index) => (
          <div key={`${book.title} book`} className={book.title}>
            <Book
              book={book}
              handleRemoveBook={handleRemoveBook}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BooksList;
