import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  const { title, category } = book;
  return (
    <div className="lessonPanel">
      <div className="book">
        <div className="aboutBook">
          <span className="category">{category}</span>
          <h3 className="title">{title}</h3>
        </div>
        <div className="bookOptions">
          <div className="comments">Comments</div>
          <div className="removeBook">Remove</div>
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="bookCompletion">
        <div className="completionIcon">Status</div>
        <div className="status">
          <div className="statusPercentage">64%</div>
          <div className="statusComplete">Completed</div>
        </div>
      </div>
      <div className="chapter">
        <h5 className="currentChapterLabel">CURRENT CHAPTER</h5>
        <div className="currentChapter">Chapter 13</div>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Book;
