import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  radiusScale,
  fontScale,
} from '../../utils/DimensionConstant';
import {Fonts} from '../../utils/Constants';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    // height:"100%",
  },
  header: {
    height: verticalScale(110),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
    // backgroundColor: 'red',
    marginTop: verticalMarginScale(15),
    marginBottom: verticalMarginScale(15),
  },
  backIcon: {
    height: verticalScale(40),
    width: horizontalScale(40),
  },
  headerTxt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(22),
    color: '#FFFFFF',
    letterSpacing: 0.25,
  },
  Container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: radiusScale(40),
    borderTopRightRadius: radiusScale(40),
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25),
    height: verticalScale(830),
  },
});
export default styles;
