import generateID from '../utils/helpers';

const initialState = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    chapter: 'Chapter 17',
    completed: 100,
    status: 'Completed',
    id: generateID(),
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
    chapter: 'Chapter 3: "A Lesson Learned"',
    completed: 64,
    status: 'Not completed',
    id: generateID(),
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
    chapter: 'Introduction',
    completed: 0,
    status: 'Not completed',
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
          author: book.author || 'Not specified',
          category: book.category,
          chapter: book.chapter || "Haven't started yet...",
          completed: 0,
          status: 'Not completed',
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
