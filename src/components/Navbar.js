import React from 'react';
import PropTypes from 'prop-types';
import { IoIosPerson } from 'react-icons/io';
import CategoryFilter from './CategoryFilter';

const Navbar = props => {
  const { handleFilterChange } = props;
  return (
    <div className="navbar">
      <ul className="navbarLeft">
        <li className="navbarTitle">Bookstore CMS</li>
        <li className="booksTab">BOOKS</li>
        <li className="categoriesTab">
          <CategoryFilter handleFilterChange={e => handleFilterChange(e.target.value)} />
        </li>
      </ul>
      <ul className="navbarRight">
        <li className="accountIconCircle">
          <IoIosPerson className="accountIcon" />
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Navbar;
