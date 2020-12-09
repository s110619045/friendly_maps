import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import elementData from "../json/element.json";

const Map = () =>{
    return(
        <ScrollView style={styles.map} >
            <Text>地圖放這</Text>
            <View style={styles.mapBtn}>
                <TouchableOpacity 
                style={styles.btn_position}
                onPress={() => Alert.alert('Simple Button pressed')}
                >
                <Text>P</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                
                style={styles.btn_navigation}
                onPress={() => Alert.alert('Simple Button pressed')}
                >
                <Text>N</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    map:{
        backgroundColor: 'pink',
        flex: 1,
        flexDirection: 'column-reverse',
    },

    mapBtn:{
        // backgroundColor: 'pink',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },

    btn_position:{
        width:50,
        height:50,
        borderRadius: 25,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 14,
        marginVertical: 20,
    },

    btn_navigation: {
        width:50,
        height:50,
        borderRadius: 25,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 14,
    },
});

export default Map;