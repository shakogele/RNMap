import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './placesAutoCompleteInputStyles';
import DefaultInputWithIcon from '../DefaultInputWithIcon/DefaultInputWithIcon';
import googleKey from '../../utility/googleKey';
import ClickableElement from '../ClickableElement/ClickableElement';
import { generateRandomSessionTokenForGoogle } from '../../utility/helpers';
import { fetchPredictions, fetchPlaceDetails } from '../../api/googleApiCalls';
import validate from '../../utility/validation';

class PlacesAutoCompleteInput extends Component {
  constructor(props){
    super(props);
    this.state={
      places: [],
      selectedPlace: null,
      sessiontoken: generateRandomSessionTokenForGoogle(),
      searchInput: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 2
        },
        touched: false
      }
    }
  };

  onSelectPlace(place){

    fetchPlaceDetails(place.place_id, this.state.sessiontoken).then( placeDetails => {
      this.setState(prevState => {
        return {
          ...prevState,
          places: [],
          selectedPlace: placeDetails,
          searchInput: {
            ...prevState.searchInput,
            value: placeDetails.formatted_address
          },
          sessiontoken: generateRandomSessionTokenForGoogle()
        }
      });
      this.props.onChoosePlace(placeDetails);
    })

  };

  onChangeText(val){

    if(validate(val, this.state.searchInput.validationRules)){
      fetchPredictions(val, this.state.sessiontoken).then(predictions => {
        this.setState(prevState => {
          return {
            ...prevState,
            places: predictions
          }
        })
      });
    }

    this.setState(prevState => {
      return {
        ...prevState,
        searchInput: {
          ...prevState.searchInput,
          value: val,
          valid: validate(val, this.state.searchInput.validationRules),
          touched: true
        }
      }
    });

  };


  render(){

    const listOfPlaces = this.state.places.map((place, index) => {
      let singlePlaceInner = (
        <View style={styles.singlePlaceInnerView}>
          <Text style={styles.singlePlaceInnerText}>{place.description}</Text>
        </View>
      );
      return (
        <ClickableElement
          key={index}
          inner={singlePlaceInner}
          onPress={() => this.onSelectPlace(place)}
         />
      );
    });

    const placesScrollView = (
      <ScrollView keyboardShouldPersistTaps="always" style={styles.autocompleteScrollView}>
        {listOfPlaces}
      </ScrollView>
    )

    return (
      <View>
        <View style={styles.inputView}>
          <DefaultInputWithIcon
            placeholder="Search Place"
            selectTextOnFocus={true}
            containerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            onChangeText={(val) => this.onChangeText(val)}
            value={this.state.searchInput.value}
            valid={this.state.searchInput.valid}
            touched={this.state.searchInput.touched}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="phone-pad"
          />
        </View>
        <View>
          { this.state.places.length ? placesScrollView : null }
        </View>
      </View>
    );

  }
}

export default PlacesAutoCompleteInput;
