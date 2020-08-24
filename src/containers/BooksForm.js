import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions/index';
import categories from '../utils/constants';

const BooksForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('choose');
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = e => {
    setCategory(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createBook({ title, category }));
    setTitle('');
    setCategory('choose');
  };
  return (
    <form
      className="booksForm"
      onSubmit={e => handleSubmit(e)}
    >
      <div className="addBookLabel">ADD NEW BOOK</div>
      <div className="addBookInputs">
        <input
          onChange={e => handleTitleChange(e)}
          value={title}
          type="text"
          className="bookTitle"
          id="bookTitle"
          placeholder="Book Title"
        />
        <div className="categoryInput">
          <select
            onChange={e => handleCategoryChange(e)}
            id="inputState"
            className="categorySelector"
          >
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
        <button type="submit" className="addBookButton">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BooksForm;
