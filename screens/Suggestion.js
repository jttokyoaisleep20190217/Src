import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
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
const url =
  "https://firebasestorage.googleapis.com/v0/b/datatesting-f6aea.appspot.com/o/graph.PNG?alt=media&token=b624e0c0-c441-490d-8c4b-27a239c2db18.PNG";

class Suggestion extends Component {
  render() {
    return (
      <View>
        <View>
          <Image
            source={{ uri: url }}
            style={{ width: 200, height: 200, padding: 10, margin: 10 }}
          />
        </View>
        <View>
          <Text>
            The diagram displays the biggest negative inflences on your sleep.
            Try adjusting these issues and feel better every morning!
          </Text>
        </View>
      </View>
    );
  }
}

export default Suggestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
