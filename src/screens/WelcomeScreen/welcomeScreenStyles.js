import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerText: {
    fontSize: scale(20),
    textAlign: "center",
    color: 'white'
  },
  headerContainer: {
    height: scale(100),
    backgroundColor: "teal",
    justifyContent: "center"
  },
  bodyContainer: {
    flex: 5,
  },
  footerText: {
    textAlign: "center",
    fontSize: scale(15),
    color: "white"
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "teal",
    justifyContent: "center",
    paddingVertical: scale(20)
  },
  buttonsContainer: {
    flexDirection: "row",
    paddingVertical: scale(20)
  },
  halvs: {
    flex: 1,
    paddingHorizontal: "10%"
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'flex-start'
  },
  closeButtonContainer: {
    backgroundColor: "teal",
    padding: scale(10),
    justifyContent: "center",
    alignItems: "center",
    width: scale(50)
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
  autoCompletesContainer: {
    height: "100%"
  },
  singleAutoCompleteContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(10),
    zIndex: 1,
    flexDirection: "row"
  },
  inputPortionLeft: {
    flex: 8
  },
  inputPortionRight: {
    flex: 2
  }
})

export default styles;
