import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = props => {
  const { book } = props;
  const { title, category } = book;
  const percentage = 66;
  return (
    <div className="lessonPanel">
      <div className="book">
        <div className="aboutBook">
          <span className="bookCategory">{category}</span>
          <h3 className="bookTitle">{title}</h3>
        </div>
        <div className="bookOptions">
          <div className="comments">Comments</div>
          <div className="removeBook">Remove</div>
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="bookCompletion">
        <div className="completionIcon">
          <CircularProgressbar
            className="circularProgressbar"
            value={percentage}
          />
        </div>
        <div className="status">
          <div className="statusPercentage">64%</div>
          <div className="statusComplete">Completed</div>
        </div>
      </div>
      <div className="chapter">
        <h5 className="currentChapterLabel">CURRENT CHAPTER</h5>
        <div className="currentChapter">Chapter 13</div>
        <button
          className="button submitBookButton"
          type="button"
        >
          UPDATE PROGRESS
        </button>
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
};

export default Book;
