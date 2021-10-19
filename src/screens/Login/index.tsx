import React from 'react';
import {ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SocialMediaButton from '../../components/SocialMediaButton';
import styles from './styles';

const Login = ({navigation}) => {
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
        type="text"
        placeholder="Email"
        autoCapitalize="none"
      />
      <Input iconName="lock" secureTextEntry={true} placeholder="Password" />
      <Button title="Login" />
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
