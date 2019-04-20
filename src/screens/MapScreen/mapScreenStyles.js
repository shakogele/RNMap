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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerInfoWindow: {
    position: "absolute", 
    width: scale(300), 
    height: scale(100), 
    zIndex: 999 },
})

export default styles;
