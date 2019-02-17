import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";

import Home from "./screens/Home";
import Input from "./screens/Input";
import Suggestion from "./screens/Suggestion";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Feeling from "./components/Feeling";
import * as firebase from "firebase";

//initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDb3oMuzP0BiLS8uouYsaXV3o4I0VOuiPs",
  authDomain: "datatesting-f6aea.firebaseapp.com",
  databaseURL: "https://datatesting-f6aea.firebaseio.com",
  storageBucket: "datatesting-f6aea.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const nav = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      defaultNavigationOptions: {
        tabBarLabel: "HOME",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        )
      }
    },
    Input: {
      screen: Input,
      defaultNavigationOptions: {
        tabBarLabel: "INPUT",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        )
      }
    },
    Suggestion: {
      screen: Suggestion,
      defaultNavigationOptions: {
        tabBarLabel: "SUGGESTION",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search-outline" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacy: 0.5,
        elevation: 5
      }
    }
  }
);
const App = createAppContainer(nav);
const styles = StyleSheet.create({});
export default App;
