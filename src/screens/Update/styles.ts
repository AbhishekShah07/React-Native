import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    alignSelf: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 50,
    borderBottomWidth: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  back: {
    paddingLeft: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonView: {
    width: '100%',
  },
});

export default styles;
