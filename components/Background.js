import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

export default class Background extends Component {
  render() {
    return (
      <Image
        source={require("../Pics/the-roaming-platypus-310824-unsplash.jpg")}
        style={styles}
      >
        {this.props.children}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});
