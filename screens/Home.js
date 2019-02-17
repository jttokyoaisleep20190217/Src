import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

class Home extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ height: 80 }}>
            <View style={{ padding: 50, marginHorizontal: 50 }}>
              <Text>Welcome to AI Sleep!</Text>
              <Text>
                Navigate to the Input page to send your personal awakeness to
                the server.
              </Text>
              <Text>
                In the Suggestion Tab, our AI will give you suggestions to
                improve your sleep.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
