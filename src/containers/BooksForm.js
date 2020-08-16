import React from 'react';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

const BooksForm = () => (
  <form>
    <div className="form-group">
      <input type="text" className="boookTitle" id="bookTitle" placeholder="Book Title" />
    </div>
    <div className="form-group col-md-4">
      <select id="inputState" className="form-control">
        <option>Choose...</option>
        {categories.map(category => (
          <option key={category} className={category}>{category}</option>
        ))}
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
);

export default BooksForm;
