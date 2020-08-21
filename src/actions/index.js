const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = bookIndex => ({
  type: 'REMOVE_BOOK',
  bookIndex,
});

const changeFilter = category => ({
  type: 'CHANGE_FILTER',
  category,
});

export { createBook, removeBook, changeFilter };
