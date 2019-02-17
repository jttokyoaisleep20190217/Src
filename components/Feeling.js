import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class Feeling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 },
        { id: 6, value: 6 },
        { id: 7, value: 7 },
        { id: 8, value: 8 },
        { id: 9, value: 9 },
        { id: 10, value: 10 }
      ],
      wasClicked: false
    };
  }

  handleClick = button => {
    firebase
      .database()
      .ref("User Inputs/")
      .push({
        button
      })
      .then(data => {
        //success callback
        console.log("data ", data);
      })
      .catch(error => {
        //error callback
        console.log("error ", error);
      });

    this.setState({ wasClicked: true });
  };

  render() {
    if (!this.state.wasClicked) {
      return (
        <View>
          <Text style={styles.titleText}>How awake are you today?</Text>
          {this.state.buttons.map(button => (
            <Button
              style={styles.button}
              small
              key={button.id}
              rounded={true}
              title={"" + button.value}
              onPress={() => this.handleClick(button)}
            />
          ))}
          <Text style={styles.baseText}>
            1: I feel great! -- 10: Don't talk to me...
          </Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>Thank you for your answer. Have a great day!</Text>
          <Text>See a sleep-improvement suggestion in the Suggestion tab.</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
    color: "red"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    margin: 5,
    borderRadius: 2
  }
});
