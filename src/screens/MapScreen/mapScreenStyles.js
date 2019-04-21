import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerContainer: {
    position: "absolute",
    width: "100%",
    top: 0,
    height: scale(100),
    backgroundColor: "teal",
    flexDirection: "row",
    zIndex: 9999,
    paddingHorizontal: scale(20),
    alignItems: 'center'
  },
  headerText: {
    width: "90%",
    fontSize: scale(20),
    textAlign: "center",
    color: 'white'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerInfoWindow: {
    position: "absolute",
    width: scale(300),
    height: scale(100),
    zIndex: 999 },
  markerContainer: {
    padding: scale(20),
  },
  goBackButton: {
    height: "100%",
    width: "10%",
    paddingHorizontal: scale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  markerCallout: {
    position: "absolute",
    width: scale(300),
    height: scale(100),
    zIndex: 999
  }
})

export default styles;
