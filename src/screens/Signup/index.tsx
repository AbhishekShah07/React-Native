import React from 'react';
import {ScrollView, Text} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import SocialMediaButton from '../../components/SocialMediaButton';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const onSubmit = () => {
    console.log('submit');
    auth()
      .createUserWithEmailAndPassword('abhisheks@gmail.com', 'Svit@7198')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <Text style={styles.text}>Create a new Account</Text>
      <Input
        iconName="user"
        keyboardType="email-address"
        type="text"
        placeholder="Email"
        autoCapitalize="none"
      />
      <Input iconName="lock" secureTextEntry={true} placeholder="Password" />
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
      />
      <Text onPress={() => navigation.goBack()} style={styles.newAccount}>
        Already have ant account? Login!!
      </Text>
    </ScrollView>
  );
};

export default Signup;
