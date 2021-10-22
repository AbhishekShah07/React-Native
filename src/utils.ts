import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const fetchAllBooks = async () => {
  const allBooks = await firestore().collection('books').get();
  return allBooks.docs.map(item => {
    return {
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

export const addBookData = async (
  bookName: string,
  authorName: string,
  price: number,
  email: string,
) => {
  await firestore()
    .collection('books')
    .doc()
    .set({name: bookName, author: authorName, price, addedBy: email});
};
