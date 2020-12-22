import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';

import Top from "../components/Top";
import HeaderPost from "../components/HeaderPost";
import InputPost from "../components/InputPost";
import Post from "../components/Post";
import Navigator from "../components/Navigator";

const PostScreen = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Top />
      <HeaderPost />
      <ScrollView>
        <InputPost />
        <Post />
      </ScrollView>
      <Navigator
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    flex:  1,
    flexDirection: 'column',
  },
})

module.exports = PostScreen;