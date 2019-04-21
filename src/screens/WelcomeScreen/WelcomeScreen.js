import React, { Component } from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import { Navigation } from 'react-native-navigation';

import { welcomeScreenOptions } from './welcomeScreenOptions';
import styles from './welcomeScreenStyles';
import PlacesAutoCompleteInput from '../../components/PlacesAutoCompleteInput/PlacesAutoCompleteInput';
import ClickableElement from '../../components/ClickableElement/ClickableElement';
import SvgIcons from '../../components/SvgIcons/SvgIcons';

class WelcomeScreen extends Component {

  constructor(props){
    super(props),
    this.state = {
      places: [],
      content: {}
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
      title: null,
      description: null
    });

    this.setState(prevState => {
      return {
        ...prevState,
        places: currentlyChosenPlaces,
      }
    });
  };

  showOnMap(){
    const places = this.state.places.filter(place => {
      return place.latitude && place.longitude && place.title && place.description;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: 'markersOnMap.MapScreen',
        passProps: { places },
      }
    });
  };

  onChoosePlace(place, index){
    const choosenPlaces = [...this.state.places];
    choosenPlaces[index].latitude = place.geometry.location.lat;
    choosenPlaces[index].longitude = place.geometry.location.lng;
    choosenPlaces[index].title = place.name;
    choosenPlaces[index].description = place.formatted_address;
    this.setState(prevState => {
      return {
        ...prevState,
        places: choosenPlaces
      }
    })
  };

  removePlace(index){
    const places = [...this.state.places];
    places.splice(index, 1);
    this.setState(prevState => {
      return {
        ...prevState,
        places
      }
    })
  }

  setContent(content){
    console.log(content);
    this.setState({
      content
    })
  };

  render(){

    const autoCompletes = this.state.places.map( (place, index) => {
      return (
        <View
            key={index}
            style={styles.singleAutoCompleteContainer}>
              <View style={ styles.inputPortionLeft }>
                  <PlacesAutoCompleteInput
                    setContent={(content) => this.setContent(content)}
                    onChoosePlace={place => this.onChoosePlace(place, index)}
                  />
              </View>
              <View style={ styles.inputPortionRight }>
                <ClickableElement
                  inner={
                    <View style={ styles.closeButtonContainer }>
                      <SvgIcons
                        icon="clear"
                        width={20}
                        height={20}
                        color="#fff"
                        strokeColor="#fff"
                        fillColor="#fff"
                        strokeWidth={0.5} />
                    </View>
                  }
                  onPress={() => this.removePlace(index)}
                />
              </View>
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
          <Text style={ styles.headerText }>Welcome Screen</Text>
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

          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps='always'
            style={styles.autoCompletesContainer}>
            {autoCompletes}
          </ScrollView>
        </View>
        <View style={ styles.footerContainer } >
          <Text style={ styles.footerText }>Created by Shalva Gelenidze</Text>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen;
