import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView} from 'react-native';
import event from "../json/event.json";

const Post = () => {
  const [valueLocation, onChangeText] = React.useState('請輸入地址');
  const [value, onChangeEvent] = React.useState('請輸入您所遇到的問題');

  return (
    <ScrollView style={styles.header}>
      <View style={styles.boxtitle}>
        <Text style={styles.title}>安全回報</Text>
      </View>

      <View style={styles.boxEventInput}>
        <View style={styles.user}>
          <Image
            style={styles.userImg}
            source={{
              uri: event.user[0].image,
            }}
          />
          <View style={styles.userText}>
            <Text style={styles.username}>{event.user[0].name}</Text>
            <Text style={styles.date}>{event.user[0].date}</Text>
          </View>
        </View>

        <View style={styles.boxLocationInput}>
          <TextInput
              style={styles.location}
              onChangeText={text => onChangeText(text)}
              value={valueLocation}
          />
          <TouchableOpacity style={styles.addbtn}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.EventInputBtn}>
          <Text>類型</Text>
        </TouchableOpacity>
        <TextInput
            multiline={true}  //置頂的方法！
            style={styles.event}
            onChangeText={text => onChangeEvent(text)}
            value={value}
        />
        <View style={styles.boxImageInputEventInputBtn}>
          <View style={styles.boxImageInput}>
            <TouchableOpacity style={styles.eventImage}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventImage}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxEventInputBtn}>
            <TouchableOpacity style={styles.EventInputBtn}>
              <Text>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.EventInputBtn}>
              <Text>上傳</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
      
      <View style={styles.box1}>
        <View style={styles.box2}>
          <View style={styles.user}>
            <Image
              style={styles.userImg}
              source={{
                uri: event.user[0].image,
              }}
            />
            <View style={styles.userText}>
              <Text style={styles.username}>{event.user[0].name}</Text>
              <Text style={styles.date}>{event.user[0].date}</Text>
            </View>
          </View>

          <View style={styles.boxHidebtn}>
            <View style={styles.EventClass}>
              <Text>類型</Text>
            </View>
            <TouchableOpacity style={styles.EventOpen}>
              <Text>></Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.box3}>
          <Text style={styles.address}>台北市市民大道六段37號</Text>
          <Text style={styles.event}>路上坑洞造成積水</Text>

          <View style={styles.boxImageInput}>
            
            <TouchableOpacity style={styles.eventImage}>
              <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eventImage}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxbtn1}>
            <TouchableOpacity style={styles.btn1}>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1}>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  boxtitle:{
    borderBottomWidth: 0.5,
  },
  title:{
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  boxEventInput:{
    paddingHorizontal: 20,
  },
  user:{
    paddingVertical: 15,
    flexDirection: 'row',
  },
  userImg:{
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'yellow',
  },
  userText:{
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  boxLocationInput:{
    flexDirection: 'row',
    alignItems: "center",
  },
  location:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    paddingHorizontal: 15,
    flex:1,
    marginRight: 15,
  },
  addbtn:{
    alignItems: "center",
    justifyContent: 'center',
    width: 30,
    height: 30, 
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  EventInputBtn:{
    alignSelf: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginVertical: 10,
    marginRight:10,
  },
  event:{
    textAlignVertical: 'top', //置頂的方法！
    padding: 15,
    height: 100,
    borderColor: 'gray', 
    borderWidth: 1,
  },
  boxImageInputEventInputBtn:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom:10,
  },
  boxImageInput:{
    flexDirection: 'row',
  },
  eventImage:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: 'gray', 
    borderWidth: 1,
    borderStyle: 'dashed',
    marginVertical: 10,
    marginLeft:10,
  },
  boxEventInputBtn:{
    flexDirection: 'row',
  },

  boxEvent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    elevation: 1.5,
    shadowOffset:{width:0,height:0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'gray',
    paddingLeft: 20,
    paddingRight: 10,
  },
  boxEventOpen:{
    flexDirection: 'row',
  },
  EventClass:{
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 10,
    backgroundColor: 'gray',
    marginVertical: 10,
    marginRight:10,
  },
  boxHidebtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box1:{
    backgroundColor: 'white',
    elevation: 1.5,
    shadowOffset:{width:0,height:0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowColor: 'gray',
    paddingLeft: 20,
    paddingRight: 10,
  },
  box2:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box3:{
    paddingBottom: 10,
  },
  address:{
    // fontSize: 15,
    paddingBottom: 10,
    // paddingHorizontal: 15,
  },
  boxbtn1:{
    flexDirection: 'row',
  },
  btn1:{
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    marginRight: 10,
  },

});

export default Post;

// <View style={styles.boxEvent}>
// <View style={styles.user}>
//   <Image
//     style={styles.userImg}
//     source={{
//       uri: event.user[0].image,
//     }}
//   />
//   <View style={styles.userText}>
//     <Text style={styles.username}>{event.user[0].name}</Text>
//     <Text style={styles.date}>{event.user[0].date}</Text>
//   </View>
// </View>
// <View style={styles.boxHidebtn}>
//   <View style={styles.EventClass}>
//     <Text>類型</Text>
//   </View>
//   <TouchableOpacity style={styles.EventOpen}>
//     <Text>></Text>
//   </TouchableOpacity>
// </View>
// </View>