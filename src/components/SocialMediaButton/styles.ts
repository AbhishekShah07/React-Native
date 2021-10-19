import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    borderWidth: 2,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  iconView: {
    height: 40,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 'auto',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
