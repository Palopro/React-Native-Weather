import React from 'react';
// import { StyleSheet } from "react-native";

import {
  Card, CardItem, Content, Text, Body,
} from 'native-base';


const WeatherCard = (props) => {
  const { weather } = props;
  // console.warn(weather);
  return (
        <Content>
            <Card>
                <CardItem header>
                    <Text>{`${weather.name}, ${weather.sys.country}`}</Text>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{`${Math.floor(weather.main.temp)} ‎°C`}</Text>
                        <Text>{weather.weather[0].main}</Text>
                        <Text>{weather.weather[0].description}</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>

  // <View style={styles.weatherCard}>
  //     <Text>{`${weather.name}, ${weather.sys.country}`}</Text>
  //     <Text>{`${Math.floor(weather.main.temp)} ‎°C`}</Text>
  //     <Text>{weather.weather[0].main}</Text>
  //     <Text>{weather.weather[0].description}</Text>
  //   </View>
  );
};

export default WeatherCard;

// const styles = StyleSheet.create({
//     weatherCard:{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         elevation: 4,
//         borderColor: "#f1f1f1",
//         borderRadius: 4,
//         paddingTop: 4,
//         paddingBottom: 4,
//         marginStart: 6,
//         marginEnd: 6
//     }
// });
