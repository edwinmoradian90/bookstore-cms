import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="appContainer">
      <div className="app ">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
