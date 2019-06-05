import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/views/Home";
import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  }
});
