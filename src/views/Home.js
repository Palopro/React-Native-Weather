import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  Content,
  Text,
  Input,
  Spinner,
} from 'native-base';
import { connect } from 'react-redux';
import { getWeatherAction } from '../actions/actionCreator';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // width: "80%",
    paddingStart: 4,
    paddingEnd: 4,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    height: 56,
    backgroundColor: '#1976D2',
    color: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    // width: "80%",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      isFocused: false,
    };
  }
  //  componentDidMount(){
  //    this.props.getWeather();
  //  }

  handleOnPressButton = () => {
    this.props.getWeather(this.state.city);
  };

  handleOnFocus = () => {
    this.setState({ isFocused: true });
  };

  handleOnBlur = () => {
    this.setState({ isFocused: false });
  };

  handleOnChange = (value) => {
    this.setState({ city: value });
  };

  renderWeather() {
    const { weather } = this.props;
    return <>{weather && <WeatherCard weather={weather} />}</>;
  }

  renderLoader() {
    const { loading } = this.props;
    return (
      <>
        {loading ? (
          // <Content>
          <Spinner color="blue" />
        ) : (
          // </Content>
          // <View
          //   style={{
          //     display: "flex",
          //     flexDirection: "column",
          //     flex: 1,
          //     justifyContent: "center",
          //     alignItems: "center"
          //   }}
          // >
          // <ActivityIndicator size="large" />
          // </View>
          this.renderWeather()
        )}
      </>
    );
  }

  render() {
    const { city, isFocused } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Weather App</Title>
          </Body>
          <Right />
        </Header>
        <Content style={styles.container}>
          <Input
            name="city"
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            onChangeText={this.handleOnChange}
            value={city}
            isFocused={isFocused}
            placeholder="City"
            keyboardType="default"
          />
          <View style={styles.button}>
          <Button block onPress={this.handleOnPressButton} disabled={!city}>
            <Text>Search</Text>
          </Button>
          </View>
          {this.renderLoader()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.weatherReducer.loading,
  weather: state.weatherReducer.weather,
});

const mapDispatchToProps = dispath => ({
  getWeather: city => dispath(getWeatherAction(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
