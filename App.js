// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View } from 'react-native';
import { Icon, Button, Container, Card, CardItem, Header, Content, Left, Right } from 'native-base'
import { createBottomTabNavigator } from 'react-navigation';
class Home extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class Settings extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}
export default createBottomTabNavigator({
  Home:{ 
    screen: Home,
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-home" color={tintColor} size={24}/>
        )
    } 
  },
  Settings:{ 
    screen: Settings,
    navigationOptions:{
      tabBarLabel:'Settings',
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-settings" color={tintColor} size={24}/>
      )
    } 
  }

},{ //router config
  initialRoutName: 'Settings',
  order: ['Settings', 'Home'],
  //navigation for complete tab navigator
  navigationOptions:{
    tabBarVisible:true
  },
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey'
  }
});