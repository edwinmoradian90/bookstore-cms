import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
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
      <div className="categoryFilter">
        <CategoryFilter handleFilterChange={e => handleFilterChange(e.target.value)} />
      </div>
    </div>
  );
};

export default BooksList;
