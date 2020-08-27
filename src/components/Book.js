import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = props => {
  const { book } = props;
  const {
    title,
    author,
    category,
    chapter,
    completed,
    status,
  } = book;
  return (
    <div className="lessonPanel">
      <div className="book">
        <div className="aboutBook">
          <span className="bookCategory">{category}</span>
          <h3 className="bookTitle">{title}</h3>
          <p className="bookAuthor">{author}</p>
        </div>
        <div className="bookOptions">
          <div className="comments">Comments</div>
          <div className="removeBook">Remove</div>
          <div className="edit">Edit</div>
        </div>
      </div>
      <div className="bookCompletionContainer">
        <div className="bookCompletion">
          <div className="completionIcon">
            <CircularProgressbar
              className="circularProgressbar"
              value={completed}
            />
          </div>
          <div className="status">
            <div className="statusPercentage">
              {completed}
              %
            </div>
            <div className="statusComplete">{status}</div>
          </div>
        </div>
        <div className="chapter">
          <h5 className="currentChapterLabel">CURRENT CHAPTER</h5>
          <div className="currentChapter">{chapter}</div>
          <button
            className="button submitBookButton"
            type="button"
          >
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    chapter: PropTypes.string,
    completed: PropTypes.number,
    status: PropTypes.string,
  }).isRequired,
};

export default Book;
