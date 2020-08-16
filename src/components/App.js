import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="app container">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
