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
      {books.map((book, index) => (
        <>
          <div key={`${book} book`} className={book}>
            <Book
              book={book}
              handleRemoveBook={handleRemoveBook}
              index={index}
            />
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
