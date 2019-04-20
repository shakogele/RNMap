import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { welcomeScreenOptions } from './welcomeScreenOptions';
import styles from './welcomeScreenStyles';
import PlacesAutoCompleteInput from '../../components/PlacesAutoCompleteInput/PlacesAutoCompleteInput';
import ClickableElement from '../../components/ClickableElement/ClickableElement';

class WelcomeScreen extends Component {

  constructor(props){
    super(props),
    this.state = {
      places: []
    }
  };

  static options(passProps) {
    return welcomeScreenOptions;
  };

  addPlace(){

    const currentlyChosenPlaces = [...this.state.places];
    currentlyChosenPlaces.push({
      latitude: null,
      longitude: null,
      latitudeDelta: 0.0122,
      longitudeDelta: (Dimensions.get('window').width / Dimensions.get('window').height) * 0.0122,
    });

    this.setState(prevState => {
      return {
        ...prevState,
        places: currentlyChosenPlaces,
      }
    });
  };

  showOnMap(){
    Navigation.push(this.props.componentId, {
      component: {
        name: 'markersOnMap.MapScreen',
        passProps: {
          places: this.state.places
        },
      }
    });
  };

  onChoosePlace(place, index){
    console.log("place, index", place, index);
    const choosenPlaces = [...this.state.places];
    choosenPlaces[index].latitude = place.geometry.location.lat;
    choosenPlaces[index].longitude = place.geometry.location.lng;
    this.setState(prevState => {
      return {
        ...prevState,
        places: choosenPlaces
      }
    })
  };

  render(){

    const autoCompletes = this.state.places.map( (place, index) => {
      return (
        <View
            key={index}
            style={styles.singleAutoCompleteContainer}>
              <PlacesAutoCompleteInput
                onChoosePlace={place => this.onChoosePlace(place, index)}
              />
        </View>
      )
    });

    const addPlaceButton = (
      <View style={ styles.buttonContainer }>
        <Text style={ styles.buttonText }>Add Place</Text>
      </View>
    );
    const showOnMapButton = (
      <View style={ styles.buttonContainer }>
        <Text style={ styles.buttonText }>Show On Map</Text>
      </View>
    );

    return (
      <View style={ styles.container }>
        <View style={ styles.headerContainer }>
          <Text style={ styles.headerText }>Welcome</Text>
        </View>
        <View style={ styles.bodyContainer } >

          <View style={ styles.buttonsContainer }>
            <View style={ styles.halvs }>
              <ClickableElement
                inner={addPlaceButton}
                onPress={() => this.addPlace()}
              />
            </View>
            <View style={ styles.halvs }>
              <ClickableElement
                inner={showOnMapButton}
                onPress={() => this.showOnMap()}
              />
            </View>
          </View>

          <View style={styles.autoCompletesContainer}>
            {autoCompletes}
          </View>

        </View>
        <View style={ styles.footerContainer } >
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
