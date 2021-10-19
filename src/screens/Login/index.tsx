import React, {useState} from 'react';
import {ScrollView, Image, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SocialMediaButton from '../../components/SocialMediaButton';
import styles from './styles';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const onSubmit = () => {
    // console.log(user);
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(userData => {
        console.log(userData, 'Login Successful!');
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <ScrollView contentContainerStyle={styles.mainView}>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>TS Application</Text>
      <Input
        iconName="user"
        keyboardType="email-address"
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(e: string) => setUser({...user, email: e})}
        value={user.email}
      />
      <Input
        iconName="lock"
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(e: string) => setUser({...user, password: e})}
        value={user.password}
      />
      <Button title="Login" onPress={onSubmit} />
      <Text style={styles.forgotText}>Forgot Password?</Text>
      <SocialMediaButton
        iconName="facebook"
        color="#4867aa"
        title="Login with Facebook"
      />
      <SocialMediaButton
        iconName="google"
        color="#de4d41"
        title="Login with Google"
      />
      <Text
        onPress={() => navigation.navigate('SignUp')}
        style={styles.newAccount}>
        Create a new account!!
      </Text>
    </ScrollView>
  );
};

export default Login;
