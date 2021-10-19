import {types} from 'mobx-state-tree'; // A
const Book = types.model('Book', {
  // B
  title: types.string,
  author: types.string,
  read: false,
});
const BookStore = types
  .model('Books', {
    // C
    books: types.array(Book),
  })
  .create({
    // D
    books: [],
  });
export default BookStore;
