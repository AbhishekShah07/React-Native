import {types, Instance} from 'mobx-state-tree';
import {fetchAllBooks, fetchUserData} from '../utils';

const BookStore = types.model('Book', {
  name: types.string,
  author: types.string,
  price: types.number,
});

const UserStore = types.model('User', {
  id: types.string,
  name: types.string,
  email: types.string,
});

const RootStore = types
  .model('Root', {
    user: UserStore,
    books: types.array(BookStore),
  })
  .actions(store => ({
    setUser(user) {
      store.user = {...user};
    },
    async fetchUser(email, password) {
      const userData = await fetchUserData(email, password);
      store.setUser(userData);
    },
    setAllBooks(allBooks: any) {
      store.books = [...allBooks];
    },
    async fetchBooks() {
      const allBooks = await fetchAllBooks();
      store.setAllBooks(allBooks);
    },
  }));
let rootData;
export const rootStore = () => {
  rootData = RootStore.create({
    user: {
      id: '',
      email: '',
      name: '',
    },
    books: [],
  });
  return rootData;
};

export {RootStore};

export type Root = Instance<typeof RootStore>;
export type User = Instance<typeof UserStore>;
export type Book = Instance<typeof BookStore>;
