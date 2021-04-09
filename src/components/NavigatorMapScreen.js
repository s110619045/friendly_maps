import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import { color } from 'react-native-reanimated';
import Ionicon from 'react-native-vector-icons/Ionicons';
import theme from '../color';
// import LogoSVG from '../img/logoSVG';

const Navigator = ({ navigation }) =>{
    return(
        <View style={styles.navbar}>
            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('MapScreen',{ name: 'button1' })}
            >
                {/* <LogoSVG/> */}
                {/* <Image style={styles.navbarimg}></Image> */}
                <Ionicon name={'ios-pin'} 
                style={{ color: navigation.navigate.name === 'button1' ? theme.dark_blue : theme.dark_blue }}  
                size={35}
                />
                
                <Text>地圖</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('PostScreen',{ name: 'button2' })}
            >
                <Ionicon name={'ios-warning'}  
                style={{ color: navigation.navigate.name === 'button2' ? theme.dark_blue : theme.gary }}  
                size={35}
                />

                <Text>安全回報</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.btn_navbar}
            onPress={() => navigation.navigate('UserScreen')}
            >
                <Ionicon name={'md-person'} 
                style={{ color: navigation.navigate === 'UserScreen' ? theme.dark_blue : theme.gary }} 
                size={35}
                />
                <Text>個人</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btncolor:{
        color: theme.gary,
    },
    btncolorb:{
        color: theme.dark_blue,
    },
    navbar:{
        flexDirection: 'row',
        backgroundColor: theme.white,
        elevation: 1.5,
        shadowOffset:{width:0,height:0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowColor: theme.gary,
      },
    
      navbarimg:{
        height: 30,
        width: 30,
        backgroundColor: 'pink',
        marginBottom: 5,
      },
    
      btn_navbar:{
        alignItems: "center",
        // backgroundColor: 'theme.light_gary',
        paddingVertical: 15,
        flex: 1,
      }
});

export default Navigator;