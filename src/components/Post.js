import { StatusBar } from 'expo-status-bar';
import { preventAutoHide } from 'expo/build/launch/SplashScreen';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Image, Text, TouchableOpacity, TextInput, View, ScrollView} from 'react-native';
import event from "../json/event.json";
import theme from '../color';

class Counter extends React.Component{
  state = { count: 0 };
  setCount = () => this.setState(
    prevState => ({ ...prevState, count: this.state.count + 1 })
  )
  render() {
    const { count } = this.state;
    return (
      <View style={styles.header}>
        <View style={styles.box1}>
          <TouchableOpacity style={styles.box2} onPress={this.setCount}>
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
                <Text style={styles.btn_text_white}>類型</Text>
              </View>
              <TouchableOpacity 
                style={styles.EventOpen} 
                onPress={this.setCount}
              >
                <Text style={count % 2 ? styles.Topen : styles.T}>></Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity >
          
          <View style={count % 2 ? styles.box3Open : styles.box3}>
            <Text style={styles.address}>台北市市民大道六段37號</Text>
            <Text style={styles.eventShow}>路上坑洞造成積水</Text>

            <View style={styles.boxImageInput}>
              <TouchableOpacity style={styles.eventImage}>
                <Text style={styles.btn_text_gary}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.eventImage}>
                <Text style={styles.btn_text_gary}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box4}>
              <View style={styles.boxbtn1}>
                <TouchableOpacity 
                  style={styles.btn1}
                >
                  <Ionicon name={'md-thumbs-up'} color={theme.light_blue} size={35}/>
                </TouchableOpacity>
                <TouchableOpacity 
                 style={styles.btn1}
                >
                  <Ionicon name={'ios-text'} color={theme.dark_blue} size={35}/>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.boxEventSolveBtn}>
                  <Ionicon name={'ios-square-outline'} color={theme.gary} size={40} style={{marginHorizontal:10}}/>
                  <Text>Solve</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const Post = () => (
  <Counter/>
);

const styles = StyleSheet.create({
  btn_text_blue:{
    color: theme.dark_blue,
  },
  btn_text_gary:{
    color: theme.gary,
  },
  btn_text_white:{
    color: theme.white,
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
  eventShow:{
    textAlignVertical: 'top', //置頂的方法！
    padding: 15,
    height: 100,
    borderColor: theme.gary, 
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 10,
  },
  boxImageInput:{
    flexDirection: 'row',
  },
  eventImage:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    borderColor: theme.gary, 
    borderWidth: 2,
    borderStyle: 'dashed',
    marginVertical: 10,
    marginLeft: 10,
  },
  EventClass:{
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: 30,
    borderRadius: 10,
    backgroundColor: theme.dark_blue,
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
    display: 'none',
  },
  box3Open:{
    paddingBottom: 10,
    display: 'flex',
  },
  Topen:{
    transform: [{rotate:'90deg'}],
  },
  T:{
    transform: [{rotate:'0deg'}],
  },
  box4:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlignVertical: 'center',
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
    marginHorizontal: 8,
  },
  boxEventSolveBtn:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 15,
  }
}
);

export default Post;