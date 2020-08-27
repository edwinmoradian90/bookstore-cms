import generateID from '../utils/helpers';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    chapter: 'Chapter 17',
    completed: 64,
    status: 'Completed',
    id: generateID(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    chapter: 'Chapter 3: "A Lesson Learned"',
    completed: 8,
    status: 'Completed',
    id: generateID(),
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    chapter: 'Introduction',
    completed: 0,
    status: 'Completed',
    id: generateID(),
  },
];

const bookStore = (state = initialState, action) => {
  const { type, bookIndex, book } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        {
          id: generateID(),
          title: book.title,
          author: book.author,
          category: book.category,
          completed: book.completed,
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
