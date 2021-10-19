import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    marginBottom: 10,
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  forgotText: {
    marginTop: 20,
    fontSize: 14,
  },
  newAccount: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default styles;
