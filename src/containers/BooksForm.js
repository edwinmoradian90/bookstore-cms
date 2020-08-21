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
    <form onSubmit={e => handleSubmit(e)}>
      <div className="form-group">
        <input
          onChange={e => handleTitleChange(e)}
          value={title}
          type="text"
          className="bookTitle"
          id="bookTitle"
          placeholder="Book Title"
        />
      </div>
      <div className="form-group col-md-4">
        <select
          onChange={e => handleCategoryChange(e)}
          id="inputState"
          className="form-control"
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default BooksForm;
