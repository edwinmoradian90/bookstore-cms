import generateID from '../utils/helpers';

const initialState = {
  books: [
    {
      title: 'Book 1',
      category: 'Action',
      id: generateID(),
    },
    {
      title: 'Book 2',
      category: 'History',
      id: generateID(),
    },
    {
      title: 'Book 3',
      category: 'Kids',
      id: generateID(),
    },
  ],
};

const bookStore = (state = initialState, action) => {
  const { type, bookIndex, book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: generateID(),
          title: book.title,
          category: book.category,
        },
      ];
    case 'REMOVE_BOOK':
      return [
        ...state.slice(0, bookIndex),
        ...state.slice(bookIndex + 1, state.length),
      ];
    default:
      return state;
  }
};

export default bookStore;
