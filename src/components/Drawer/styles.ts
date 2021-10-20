import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  routesView: {
    height: 30,
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 10,
  },
  routesText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutView: {
    width: '90%',
    alignSelf: 'center',
    height: 50,
    backgroundColor: '#2e64e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default styles;
