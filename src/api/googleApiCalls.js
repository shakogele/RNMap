import googleKey from '../utility/googleKey';
import {validateGoogleResponse} from '../utility/validation';


export const fetchPredictions = (queryString, sessiontoken) => {

  const promise = new Promise((resolve, reject) => {
    let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${queryString}&key=${googleKey}&types=address&sessiontoken=${sessiontoken}`;
    fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    })
    .catch(err => {
        reject("Cant Connect to GOOGLE!", err);
    })
    .then(res => res.json())
    .then(parsedResponse => {
        if(parsedResponse.status === "OK"){
          resolve(parsedResponse.predictions);
        }
        reject(validateGoogleResponse(parsedResponse.status));
    })
    .catch(err => {
        reject("Error in returning predictions from object!", err);
    });
  });

  return promise
      .catch(err => {console.log(err);})
      .then(predictions => {
          return predictions;
      });

};


export const fetchPlaceDetails = (placeId, sessiontoken) => {

  const promise = new Promise((resolve, reject) => {
    let url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${googleKey}&sessiontoken=${sessiontoken}`;
    fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    })
    .catch(err => {
        reject("Cant Connect to Server!", err);
    })
    .then(res => res.json())
    .then(parsedResponse => {

        if(parsedResponse.status === "OK"){
          resolve(parsedResponse.result);
        }
        reject(validateGoogleResponse(parsedResponse.status));

    })
    .catch(err => {
        reject("Authentication failed, please try again!", err);
    });
  });

  return promise
      .catch(err => {console.log(err);})
      .then(placeDetails => {
          return placeDetails;
      });

};
