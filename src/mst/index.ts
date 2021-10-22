import {types, Instance, onSnapshot, applySnapshot} from 'mobx-state-tree';
import {
  fetchAllBooks,
  fetchUserData,
  fetchMyAllBooks,
  createNewBook,
  deleteMyBook,
  fetchBook,
  updateBook,
} from '../utils';

const BookStore = types.model('Book', {
  name: types.string,
  author: types.string,
  price: types.number,
  id: types.string,
});

const UserStore = types.model('User', {
  id: types.string,
  name: types.string,
  email: types.string,
});

const RootStore = types
  .model('Root', {
    user: UserStore,
    book: BookStore,
    books: types.array(BookStore),
    myBooks: types.array(BookStore),
  })
  .actions(store => {
    function staticUserData() {
      applySnapshot(store, {...store, user: {...store.user, name: 'abhi'}});
    }
    async function fetchUser(email: String, password: String) {
      const userData = await fetchUserData(email, password);
      applySnapshot(store, {
        ...store,
        user: {id: userData.id, name: userData.name, email: userData.email},
      });
    }
    async function fetchBooks() {
      const allBooks = await fetchAllBooks();
      applySnapshot(store, {...store, books: [...allBooks]});
    }
    async function fetchMyBooks() {
      const myBooks = await fetchMyAllBooks();
      applySnapshot(store, {...store, myBooks: [...myBooks]});
    }
    async function addBook(name, author, price) {
      await createNewBook(name, author, price);
    }
    async function deleteBook(id) {
      await deleteMyBook(id);
    }
    async function fetchSingleBook(id) {
      const bookData = await fetchBook(id);
      applySnapshot(store, {
        ...store,
        book: {
          ...bookData,
        },
      });
      return bookData;
    }
    async function updateSingleBook(data) {
      await updateBook(data);
    }
    return {
      staticUserData,
      fetchUser,
      fetchBooks,
      fetchMyBooks,
      addBook,
      deleteBook,
      fetchSingleBook,
      updateSingleBook,
    };
  });

export const rootStore = () => {
  const rootTree = RootStore.create({
    user: {
      id: '',
      email: '',
      name: '',
    },
    book: {
      name: '',
      author: '',
      price: 0,
      id: '',
    },
    books: [],
    myBooks: [],
  });
  onSnapshot(rootTree, snapshot => console.log('snapshot: ', snapshot));
  return {rootTree};
};

export {RootStore};

export type Root = Instance<typeof RootStore>;
export type User = Instance<typeof UserStore>;
export type Book = Instance<typeof BookStore>;
