import React, {Component, component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as Expo from 'expo';
import * as Google from 'expo-google-app-auth';

class LoginScreen extends Component{
    signInWithGoogleAsync = async () => {
        try {
          const result = await Expo.Google.logInAsync({
            // androidClientId: YOUR_CLIENT_ID_HERE,
            behavior: 'web',
            iosClientId: '403336842208-8gp0gpc3jmrbei3bt6bqc2eet0d19ej0.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };

    render(){
        return(
            <View style={styles.container}>
                <Button   
                    title="sign in with google"
                    onPress={() => this.signInWithGoogleAsync()}
                >
                </Button>
            </View>
        );
    }
}
export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})