import React from 'react';
import { View, Text } from 'react-native';
import styles from './markerInfoWindowStyles';

const MarkerInfoWindow = props => {
  return (
    <View style={ styles.infoWindowContainer }>
      <Text style={ styles.infoWindowText }>{props.location}</Text>
    </View>
  );
};

export default MarkerInfoWindow;
