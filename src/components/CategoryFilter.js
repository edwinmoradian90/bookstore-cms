import React from 'react';
import PropTypes from 'prop-types';
import categories from '../utils/constants';

const CategoryFilter = props => {
  const { handleFilterChange } = props;
  return (
    <div className="selectCategory">
      <select
        name="category"
        id="category"
        className="selectCategoryElement"
        onChange={e => handleFilterChange(e)}
      >
        <option value="CATEGORIES">CATEGORIES</option>
        {categories.map(category => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = { handleFilterChange: PropTypes.func.isRequired };

export default CategoryFilter;
