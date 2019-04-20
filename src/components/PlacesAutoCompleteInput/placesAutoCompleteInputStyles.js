import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  inputContainerStyle: {
    height: scale(45),
    padding: 0,
    paddingHorizontal: scale(10),
    backgroundColor: '#ffffff',
    fontSize: scale(16),
    zIndex: 1,
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: scale(20),
    marginHorizontal: "10%",
    flexDirection: 'row-reverse',
  },
  inputStyle: { height: scale(44) },
  autocompleteScrollView: {
    width: "80%",
    marginHorizontal: "10%",
    height: scale(150),
    backgroundColor: "white",
    position: "absolute",
    zIndex: 999
  },
  singlePlaceInnerView: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },
  singlePlaceInnerText: {

  },
})

export default styles;
