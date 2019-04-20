const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
};

export const validateGoogleResponse = responseStatus => {
  let errorText = null;
  switch (responseStatus) {
    case "ZERO_RESULTS":
      errorText = "No Results Found";
      break;
    case "OVER_QUERY_LIMIT":
      errorText = "You are over your quota";
      break;
    case "REQUEST_DENIED":
      errorText = "Your Request Denied (lack of/invalid API_KEY)";
      break;
    case "INVALID_REQUEST":
      errorText = "Invalid Request: input parametere is missing";
      break;
    case "UNKNOWN_ERROR":
      errorText = "Server Error: PLease try again";
      break;
    default:
  };

  return errorText;
};

const minLengthValidator = (val, minLength) => {
  console.log(val);
  return val.length >= minLength;
};

export default validate;
