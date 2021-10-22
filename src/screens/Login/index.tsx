import React, {useState} from 'react';
import {ScrollView, Image, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import SocialMediaButton from '../../components/SocialMediaButton';
import styles from './styles';
import {rootStore} from '../../mst';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const {rootTree} = rootStore();
  const [user, setUser] = useState({
    email: 'abhishek@gmail.com',
    password: 'Svit@7198',
  });
  const onSubmit = () => {
    rootTree.fetchUser(user.email, user.password);
  };
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '30123844710-ok4ibefac24gu5mokib5t45ttf7cbgpc.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
  });
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();
      navigation.reset({index: 0, routes: [{name: 'Tab'}]});
    } catch (error) {
      console.log('some error', error);
    }
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
      <SocialMediaButton
        iconName="facebook"
        color="#4867aa"
        title="Login with Facebook"
      />
      <SocialMediaButton
        iconName="google"
        color="#de4d41"
        title="Login with Google"
        onPress={signIn}
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
