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
  ActivityIndicator,
  ToolbarAndroid,
  StatusBar
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
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              elevation: 4,
              borderColor: "#f1f1f1",
              borderRadius: 4,
              paddingTop: 4,
              paddingBottom: 4,
              marginStart: 6,
              marginEnd: 6
            }}
          >
            <Text>{`${weather.name}, ${weather.sys.country}`}</Text>
            <Text>{`${Math.round(weather.main.temp)} ‎°C`}</Text>
          </View>
        )}
      </>
    );
  }

  _renderLoader() {
    const { loading, weather } = this.props;
    console.log(loading, weather);
    return (
      <>
        {loading ? (
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          this._renderWeather()
        )}
      </>
    );
  }

  render() {
    const { city, isFocused } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#1565C0" barStyle="light-content" />
        <ToolbarAndroid
          style={styles.toolbar}
          title={"Awesome App"}
          titleColor="#FFFFFF"
        />
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
          caretHidden={false}
          selectionColor={"#1976D2"}
          underlineColorAndroid={isFocused ? "#1976D2" : "#D3D3D3"}
          keyboardType="default"
        />
        <View style={{ 
          marginTop: 15, 
          paddingStart: 8, 
          paddingEnd: 8 
          }}>
          <Button
            color="#009688"
            title="Search"
            onPress={this._handleOnPressButton}
            disabled={!city}
          />
        </View>
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
  toolbar: {
    height: 56,
    backgroundColor: "#1976D2",
    color: "#FFFFFF"
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
