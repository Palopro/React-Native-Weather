import React from "react";
import { TextInput, View, StyleSheet } from "react-native";

const TextField = props => {
  const {
    name,
    onBlur,
    onFocus,
    onChangeText,
    value,
    placeholder,
    keyboardType,
    isFocused
  } = props;
  return (
    <View>
      <TextInput
        name={name}
        style={styles.textInput}
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        selectionColor={"#1976D2"}
        underlineColorAndroid={isFocused ? "#1976D2" : "#D3D3D3"}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    paddingLeft: 6
  }
});
