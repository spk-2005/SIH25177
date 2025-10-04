import React, { useEffect } from 'react';
import { View, Button, Alert, StyleSheet, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
     expoClientId: '434614483592-btib70ig76msul9i4934278btp6gsl65.apps.googleusercontent.com',
    androidClientId: '434614483592-pu7eb5vttg1s3oo6nf79g6mr36500gsq.apps.googleusercontent.com',
    iosClientId: '434614483592-5stoahghjcj6svt1psa31l5t28m7s516.apps.googleusercontent.com', // add if you support iOS
    webClientId: '434614483592-btib70ig76msul9i4934278btp6gsl65.apps.googleusercontent.com',
      scopes: ['profile', 'email'],  // only these!
 });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCred) => {
          Alert.alert('Login Success', `Welcome back ${userCred.user.displayName}`);
        })
        .catch((err) => Alert.alert('Error', err.message));
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Button title="Login with Google" disabled={!request} onPress={() => promptAsync()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});
