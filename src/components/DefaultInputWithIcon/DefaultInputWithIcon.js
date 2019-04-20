import React from "react";
import { View, TextInput } from "react-native";
import styles from './defaultInputWithIconStyles';

const DefaultInputWithIcon = props => {
  return (
    <View style={[styles.inputContainer, props.containerStyle, !props.valid && props.touched ? styles.invalid : null]}>
      <TextInput
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        {...props}
        style={[styles.input, props.inputStyle]}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingHorizontal: 2}}>
        {props.inputIcon}
      </View>
    </View>
  )
};

export default DefaultInputWithIcon;
