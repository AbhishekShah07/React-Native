import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  iconView: {
    height: 50,
    width: 50,
    paddingTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
  },
  icon: {
    height: '100%',
    margin: 'auto',
  },
  textInput: {
    marginLeft: 20,
    width: '100%',
    height: '100%',
  },
});

export default styles;
