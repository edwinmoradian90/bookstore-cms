import React from 'react';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbarLeft">
      <li className="navbarTitle">Bookstore CMS</li>
      <li className="booksTab">BOOKS</li>
      <li className="categoriesTab">CATEGORIES</li>
    </ul>
    <ul className="navbarRight">
      <li className="accountIconCircle">
        <div className="accountIcon" />
      </li>
    </ul>
  </div>
);

export default Navbar;
