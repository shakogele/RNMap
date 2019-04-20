import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    color: 'white'
  },
  headerContainer: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center"
  },
  bodyContainer: {
    flex: 5,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center"
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingVertical: scale(20)
  },
  halvs: {
    flex: 1,
    paddingHorizontal: "10%"
  },
  buttonContainer: {
    paddingVertical: scale(20),
    justifyContent: "center",
    backgroundColor: "teal",
    borderWidth: 1,
    borderColor: "green"
  },
  buttonText: {
    color: "white",
    fontSize: scale(18),
    textAlign: 'center'
  },
  singleAutoCompleteContainer: {
    paddingVertical: scale(5)
  }
})

export default styles;
