import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  const { title, category } = book;
  return (
    <>
      <span className="title">{title}</span>
      <span className="category">{category}</span>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default Book;
