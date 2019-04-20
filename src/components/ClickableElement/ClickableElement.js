import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const ClickableElement = props => {
    return (Platform.OS === "android") ? (
      <TouchableNativeFeedback onPress={props.onPress}>
        {props.inner}
      </TouchableNativeFeedback>
    ) : (
      <TouchableOpacity onPress={props.onPress}>
        {props.inner}
      </TouchableOpacity>
    );
}

export default ClickableElement;
