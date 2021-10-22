import {types, Instance, onSnapshot} from 'mobx-state-tree';
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
  .actions(
    (store: {
      user: {id: String; email: String; name: String};
      books: Array<{name: String; author: String; price: Number}>;
    }) => ({
      setUser(user: {id: String; email: String; name: String}) {
        console.log(user);
        store.user = {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
      async fetchUser(email: String, password: String) {
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
    }),
  );

export const rootStore = () => {
  const rootTree = RootStore.create({
    user: {
      id: '',
      email: '',
      name: '',
    },
    books: [],
  });
  onSnapshot(rootTree, snapshot => console.log('snapshot: ', snapshot));
  return {rootTree};
};

export {RootStore};

export type Root = Instance<typeof RootStore>;
export type User = Instance<typeof UserStore>;
export type Book = Instance<typeof BookStore>;
