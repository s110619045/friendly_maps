import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import theme from '../color';
import Ionicon from 'react-native-vector-icons/Ionicons';
import elementData from "../json/element.json";
import { color } from 'react-native-reanimated';

const Map = () =>{
    return(
        <View style={styles.map} >
            <ScrollView>
                <Text>地圖放這</Text>
            </ScrollView>
            <View style={styles.mapBtn}>
                <TouchableOpacity 
                style={styles.btn_position}
                onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Ionicon name={'md-locate'} color={theme.white} size={30}/>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.btn_navigation}
                onPress={() => Alert.alert('Simple Button pressed')}
                >
                    <Ionicon name={'ios-navigate'} color={theme.dark_blue} size={60} style={{margin:-4.9}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    map:{
        // backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column-reverse',
    },

    mapBtn:{
        // backgroundColor: 'pink',
        // alignItems: 'flex-end',
        // justifyContent: 'flex-end',
        position:'absolute',
        right: 20,
        bottom: 25,
    },

    btn_position:{
        width:50,
        height:50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.light_blue,
        padding: 10,
        marginVertical: 20,
    },

    btn_navigation: {
        width:50,
        height:50,
        borderRadius: 25,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.white,

    },

    btn_text:{
        color: theme.white,
    }
});

export default Map;