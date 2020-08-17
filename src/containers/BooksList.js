import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../actions/index';
import Book from '../components/Book';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.bookStore);
  const handleRemoveBook = bookIndex => {
    dispatch(removeBook(bookIndex));
  };
  return (
    <div className="booksTable">
      {books.map((book, i) => (
        <>
          <div key={`${book} book`} className={book}>
            <Book book={book} />
          </div>
          <div className="removeBookContainer">
            <button
              onClick={() => handleRemoveBook(i)}
              type="button"
              className="removeBook btn btn-danger"
              id={`${book.title}`}
            >
              Remove Book
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default BooksList;
