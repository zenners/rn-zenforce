import React, { Component } from "react";
import { View, Text } from 'react-native'
// import HomeScreen from "./HomeScreen.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
// import Profile from "../ProfileScreen/index.js";
// import SideBar from "../SideBar/SideBar.js";
import LoginScreen from '../Login'
import { StackNavigator, DrawerNavigator } from "react-navigation";
import TaskScreen from '../TaskScreen'

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  Home: {
    screen: TaskScreen,
    navigationOptions: {
      headerTitle: 'Tasks',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default RootNavigator;
