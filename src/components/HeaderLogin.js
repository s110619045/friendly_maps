import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import User from "../json/user.json";
import theme from '../color';
import firebase from 'firebase';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import LoadingScreen from "../screen/LoadingScreen";
import LoginScreen from "../screen/LoginScreen";
import DashboardScreen from "../screen/DashboardScreen";

export default class HeaderLogin extends React.Component{
  render(){
    return (
      <AppNavigator></AppNavigator>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

// const HeaderLogin = () => {
//   return (
//     <View  style={styles.header}>
//         <View style={styles.box}> 
//           <Ionicon 
//             name={'logo-google'} 
//             style={styles.googleLogo}  
//             size={80}
//           />

//           <TextInput
//             style={styles.boxInput}
//             //  onChangeText={(text) => this.setState({email: text})}
//             //  value={this.state.email}
//             placeholder={"請輸入註冊信箱"}
//           />

//           <TextInput
//             style={styles.boxInput}
//             //  onChangeText={(text) => this.setState({password: text})}
//             //  value={this.state.password}
//               placeholder={"請輸入註冊密碼"}
//           />
          
//           <TouchableOpacity 
//             style={styles.btn}
//           >
//             <Text style={styles.btnText}>sign in with google</Text>
//           </TouchableOpacity>
//        </View>

//    </View>
//   );
// };

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: theme.white,
    borderBottomWidth: 0.5,
    borderColor: theme.gary,
  },

  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
    // backgroundColor: theme.light_gary,
  },

  googleLogo: {
    color: theme.dark_blue,
    marginBottom: 10,
  },

  boxInput:{
    flexDirection: 'row',
    alignItems: "center",
    height: 40, 
    width: 300,
    backgroundColor: theme.white,
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    marginVertical: 5,
  },

  btn:{
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'center',
    height: 40, 
    width: 300,
    backgroundColor: theme.dark_blue, 
    // borderColor: theme.light_blue, 
    // borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 20,
    marginVertical: 5,
  },

  btnText:{
    color: theme.white,
  },

});

// export default HeaderLogin;