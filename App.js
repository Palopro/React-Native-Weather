/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { getWeatherAction } from "./src/actions/actionCreator";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      isFocused: false
    };
  }
  //  componentDidMount(){
  //    this.props.getWeather();
  //  }

  _handleOnPressButton = () => {
    this.props.getWeather(this.state.city);
  };

  _handleOnFocus = () => {
    this.setState({ isFocused: true });
  };

  _handleOnBlur = () => {
    this.setState({ isFocused: false });
  };

  _handleOnChange = value => {
    this.setState({ city: value });
  };

  _renderWeather() {
    const { weather } = this.props;
    console.log(weather);
    return (
    <>
      {weather && (
      <>
        <Text>{`${weather.name}, ${weather.sys.country}`}</Text>
        <Text>{weather.main.temp}</Text>
      </>
    )}
    </>
    );
  }

  _renderLoader() {
    const { loading, weather } = this.props;
    console.log(loading, weather);
    return <>{loading ? <ActivityIndicator /> : this._renderWeather()}</>;
  }

  render() {
    const { city, isFocused } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>React Native Awesome App!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
          name="city"
          style={styles.textInput}
          onFocus={this._handleOnFocus}
          onBlur={this._handleOnBlur}
          onChangeText={this._handleOnChange}
          value={city}
          placeholder="City"
          selectionColor="#428AF8"
          underlineColorAndroid={isFocused ? "#428AF8" : "#D3D3D3"}
          keyboardType="default"
        />
        <Button
          color="#428AF8"
          title="Search"
          onPress={this._handleOnPressButton}
        />
        {this._renderLoader()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.weatherReducer.loading,
  weather: state.weatherReducer.weather
});

const mapDispatchToProps = dispath => ({
  getWeather: city => dispath(getWeatherAction(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  textInput: {
    height: 40,
    paddingLeft: 6
  }
});
