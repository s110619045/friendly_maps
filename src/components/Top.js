import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView} from 'react-native';
import event from "../json/event.json";

const Top = () => {
    return(
        <View style={styles.top}></View>
    );
};

const styles = StyleSheet.create({
    top:{
        height: 40,
    }
});

export default Top;