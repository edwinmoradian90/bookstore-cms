import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

const BooksForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const handleChange = e => {
    e.preventDefault();
    if (e.target.id === 'bookTitle') {
      setTitle(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    document.getElementById('bookTitle').value = '';
    document.getElementById('inputState').defaultValue = 'choose';
    const book = { title, category };
    dispatch(createBook(book));
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form-group">
        <input
          onChange={e => handleChange(e)}
          type="text"
          className="bookTitle"
          id="bookTitle"
          placeholder="Book Title"
        />
      </div>
      <div className="form-group col-md-4">
        <select onChange={e => handleChange(e)} id="inputState" className="form-control">
          <option value="choose">Choose...</option>
          {categories.map(category => (
            <option
              value={category}
              key={category}
              className={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BooksForm;
