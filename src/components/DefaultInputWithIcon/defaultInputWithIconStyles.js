import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from '../../utility/scaling';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    color: '#aeb8b6',
    fontSize: scale(16),
    borderTopWidth: 0,
    borderColor: "#aeb8b6",
    paddingHorizontal: scale(15),
    width: '100%',
  },
  invalid: {
    borderColor: "red"
  }
});

export default styles;
