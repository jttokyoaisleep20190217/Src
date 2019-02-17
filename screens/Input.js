import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Feeling from "../components/Feeling";

class Input extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 80 }}>
            <View style={{ padding: 50, marginHorizontal: 50 }} />
            <Feeling />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
