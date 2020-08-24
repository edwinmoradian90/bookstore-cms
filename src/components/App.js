import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="app ">
        <BooksList />
        <BooksForm />
      </div>
    </div>
  );
}

export default App;
