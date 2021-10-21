import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    height: 100,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  bookView: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.2,
  },
  bookText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 3,
  },
  updateButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e64e5',
    padding: 10,
    borderRadius: 10,
  },
  updateText: {color: '#ffffff'},
  priceView: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  subText: {
    marginTop: 5,
    marginBottom: 5,
  },
  subTextLabel: {
    fontWeight: 'bold',
  },
});

export default styles;
