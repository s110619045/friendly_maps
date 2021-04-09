import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

class LoadingScreen extends Component{
    componentDidMount(){
        this.clickIfLoggedIn();
    }

    clickIfLoggedIn = () =>{
        firebase.auth().onAuthStateChanged(
            function(user){
                if(user){
                    this.props.navigation.navigate('DashboardScreen');
                }
                else{
                    this.props.navigation.navigate('LoginScreen');
                }
            }.bind(this)
        );

    }

    render(){
        return(
            <View style={styles.container}>
                {/* loading 符號 */}
                <ActivityIndicator size="large" /> 
            </View>
        );
    }
}
export default LoadingScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})