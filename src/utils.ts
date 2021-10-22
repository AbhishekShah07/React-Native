import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const fetchAllBooks = async () => {
  const allBooks = await firestore().collection('books').get();
  return allBooks.docs.map(item => {
    return {
      id: item.id,
      name: item.data().name,
      author: item.data().author,
      price: item.data().price,
    };
  });
};

export const fetchMyAllBooks = async () => {
  const myBooks = await firestore()
    .collection('books')
    .where('addedBy', '==', 'abhishek@gmail.com')
    .get();
  return myBooks.docs.map(item => {
    return {
      id: item.id,
      name: item.data().name,
      author: item.data().author,
      price: item.data().price,
    };
  });
};

export const fetchUserData = async (email: string, password: string) => {
  let userData;
  const user = await auth().signInWithEmailAndPassword(email, password);
  const querySnapshot = await firestore()
    .collection('users')
    .where('email', '==', email)
    .get();
  querySnapshot.forEach(doc => {
    userData = {
      name: doc.data().name,
      email: doc.data().email,
      id: user.user.uid,
    };
  });
  return userData;
};

export const createNewBook = async (
  bookName: string,
  authorName: string,
  price: number,
) => {
  await firestore()
    .collection('books')
    .doc()
    .set({
      name: bookName,
      author: authorName,
      price: parseInt(price),
      addedBy: 'abhishek@gmail.com',
    });
};

export const deleteMyBook = async id => {
  await firestore().collection('books').doc(id).delete();
};

export const fetchBook = async id => {
  const book = await firestore().collection('books').doc(id).get();
  return {
    id: book.id,
    name: book._data.name,
    author: book._data.author,
    price: book._data.price,
  };
};

export const updateBook = async data => {
  console.log(data);
  await firestore()
    .collection('books')
    .doc(data.id)
    .update({
      author: data.author,
      name: data.name,
      price: parseInt(data.price),
    });
};
