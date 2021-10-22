import React, {useState} from 'react';
import {ScrollView, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import SocialMediaButton from '../../components/SocialMediaButton';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState({
    email: 'abhishek@gmail.com',
    password: 'Svit@7198',
    name: 'Abhishek Shah',
  });
  const onSubmit = () => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(async userData => {
        try {
          console.log(userData);
          const userCreation = await firestore()
            .collection('users')
            .doc(userData.user.uid)
            .set({
              name: user.name,
              email: user.email,
            });
          console.log(userCreation);
        } catch (userCreationError) {
          console.log(userCreationError);
        }
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.error('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.error('That email address is invalid!');
        }
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <Text style={styles.text}>Create a new Account</Text>
      <Input
        iconName="adduser"
        placeholder="Name"
        onChangeText={(e: String) => setUser({...user, name: e})}
        value={user.name}
      />
      <Input
        iconName="user"
        keyboardType="email-address"
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={e => setUser({...user, email: e})}
        value={user.email}
      />
      <Input
        iconName="lock"
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={e => setUser({...user, password: e})}
        value={user.password}
      />
      <Button onPress={onSubmit} title="Sign Up" />
      <SocialMediaButton
        iconName="facebook"
        color="#4867aa"
        title="Sign up with Facebook"
      />
      <SocialMediaButton
        iconName="google"
        color="#de4d41"
        title="Sign up with Google"
        // onPress={onGoogleButtonPress}
      />
      <Text onPress={() => navigation.goBack()} style={styles.newAccount}>
        Already have ant account? Login!!
      </Text>
    </ScrollView>
  );
};

export default Signup;
