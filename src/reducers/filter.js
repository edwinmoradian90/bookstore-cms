const initialState = 'CATEGORIES';

const filter = (state = initialState, action) => {
  const { type, category } = action;
  switch (type) {
    case 'CHANGE_FILTER':
      return category;
    default:
      return state;
  }
};

export default filter;
