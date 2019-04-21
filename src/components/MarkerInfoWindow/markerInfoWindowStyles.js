import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  infoWindowContainer: {
    backgroundColor: "#eee",
    width: scale(100),
    height: scale(50)
  },
  infoWindowText: {
    width: "100%",
    height: "100%",
    fontSize: scale(15),
    color: "#333"
  },
})

export default styles;
