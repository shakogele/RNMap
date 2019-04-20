import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import { mapScreenOptions } from './mapScreenOptions';
import styles from './mapScreenStyles';
import {Navigation} from 'react-native-navigation';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SvgIcons from '../../components/SvgIcons/SvgIcons';
import ClickableElement from '../../components/ClickableElement/ClickableElement';

class MapScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentLocation: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0122,
        longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * 0.0122,
      }
    };
    console.log("Map Props", this.props);
  };

  static options(passProps) {
    return mapScreenOptions;
  };

  goBack(){
    Navigation.pop(this.props.componentId);
  };

  render(){

    const goBackIcon = (
                        <View style={{ padding: 12 }}>
                          <SvgIcons
                            icon="arrowLeft"
                            width={20}
                            height={20}
                            color="#f8a11b"
                            strokeColor="#f8a11b"
                            fillColor="#f8a11b"
                            strokeWidth={0.5} />
                        </View>
                      )
    const goBackButton = (
                        <ClickableElement
                          inner={goBackIcon}
                          onPress={() => this.goBack()}
                        />
                      )
    return (

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          ref={ ref => this.map = ref }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
            <MapView.Marker
              coordinate={this.state.currentLocation}>
                <View style={styles.markerContainer}>
                  <SvgIcons
                    icon="marker"
                    width={50}
                    height={50}
                    color="#f8a11b"
                    strokeColor="#f8a11b"
                    fillColor="#f8a11b"
                    strokeWidth={0.5} />
                </View>
              <MapView.Callout
                  tooltip={true}
                  style={styles.markerInfoWindow}
                  onPress= { () => this.onClickNext() }>
              </MapView.Callout>
            </MapView.Marker>
        </MapView>
        <View style={{
            position: "absolute",
            width: "100%",
            top: 0,
            height: 100,
            backgroundColor: "teal",
            flexDirection: "row",
            zIndex: 9999,
            paddingHorizontal:20 }}>
          {goBackButton}
        </View>
      </View>
    )
  }
}

export default MapScreen;
