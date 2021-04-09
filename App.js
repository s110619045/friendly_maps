import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import theme from './src/color';

import MapScreen from "./src/screen/MapScreen";
import PostScreen from "./src/screen/PostScreen";
import UserScreen from "./src/screen/UserScreen";

import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () =>{
  return(
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === '地圖') {
              iconName = 'ios-pin';
            } else if (route.name === '安全回報') {
              iconName = 'ios-warning';
            } else if (route.name == '個人') {
              iconName = 'md-person';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={35} color={color} style={styles.btn_navbar}/>;
          },
        })}

        tabBarOptions={{
          activeTintColor: theme.dark_blue,
          inactiveTintColor: theme.dark_gary,
          labelStyle:{
            fontSize: 15,
            paddingBottom: 0,
          },
          style: {
            height: 85,
            borderTopWidth: 0,
            paddingTop: 10,
            paddingBottom: 15,
          },
          safeAreaInset: { bottom: 'never', top: 'never' },
        }}
      >
        <Tab.Screen       
          name="地圖" 
          component={MapScreen} 
          options={({ route })=>({
          headerStatusBarHeight: -15,
          headerShown: false,
          headerTitleStyle:{
            fontSize: 0,
          },
          })}
        />

        <Tab.Screen
          name="安全回報" 
          component={PostScreen} 
          options={({ route })=>({
            headerStatusBarHeight: -15,
            headerShown: false,
            headerTitleStyle:{
              fontSize: 0,
            },
          })}
        />

        <Tab.Screen
          name="個人" 
          component={UserScreen} 
          options={({ route })=>({
            headerStatusBarHeight: -15,
            headerShown: false,
            // headerStyle:{
            //   backgroundColor: '#F7F7F5',
            //   elevation: 0,
            //   shadowOpacity: 0,
            //   borderBottomWidth: 0,
            // },  
            headerTitleStyle:{
              fontSize: 0,
            },
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  btn_navbar:{
    // backgroundColor: 'blue',

  },
})

module.exports = App;