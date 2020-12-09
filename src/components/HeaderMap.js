import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, Image, View, TextInput, Button, ScrollView, TouchableOpacity} from 'react-native';
import elementData from "../json/element.json";
import User from "../json/user.json";

const HeaderMap = () =>{
    const [value, onChangeText] = React.useState('Useless Placeholder');

    return(
      <View style={styles.header}>
        <View style={styles.boxSearchUser}>
          <TextInput
            style={styles.searchbar}
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          <Image
            style={styles.userImg}
            source={{
              uri: User.user[0].image,
            }}
          />
        </View>
        <ScrollView style={styles.element} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[0].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[1].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[2].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[3].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[4].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[5].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[6].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[7].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[8].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[9].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[10].name}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.btn_element}
            onPress={() => Alert.alert('Simple Button pressed')}
          >
            <Text>{elementData.elementData[11].name}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  // top:{
  //   height: 40,
  // },

  home:{
    flex:  1,
    flexDirection: 'column',
  },

  header: {
    backgroundColor: '#F7F7F5',
  },

  boxSearchUser:{
    flexDirection: 'row',
    marginTop: 10,
  },

  userImg:{
    marginRight: 20,
    height: 40,
    width: 40,
    borderRadius: 60,
    backgroundColor: 'yellow',
  },

  searchbar: { 
    flex: 1,
    marginHorizontal: 20,
    paddingHorizontal: 12,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius: 30,
  },

  element: {
    paddingVertical: 15,
    paddingHorizontal: 15,
  },

  btn_element: {
    backgroundColor: "#DDDDDD",
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginVertical: 5,
    marginRight:10,
  }
});

export default HeaderMap;