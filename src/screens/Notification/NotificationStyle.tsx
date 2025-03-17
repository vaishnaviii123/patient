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
    width: horizontalScale(480),
    height: verticalScale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(15),
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
  header1: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#595959',
    marginVertical: verticalMarginScale(10),
  },
  subContainer: {
    height: verticalScale(95),
    marginBottom: verticalMarginScale(13),
    borderRadius: radiusScale(10),
    backgroundColor: '#CEEBFF',
    paddingHorizontal: horizontalScale(15),
    // paddingVertical: verticalScale(5),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  subHead: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#090909',
  },
  txt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#5D5D5D',
  },
  txt1: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(12),
    color: '#5D5D5D',
  },
  leftContainer: {
    width: '75%',
    height:verticalScale(60),
    justifyContent:'space-between',
    // backgroundColor: 'red',
  },
  rightContainer: {
    width: '18%',
    height:verticalScale(58),
    // backgroundColor: 'yellow',
    justifyContent:'space-between',
    alignItems:'center',
  },
  iconContainer: {
    backgroundColor: '#FFFFFF',
    height: verticalScale(36),
    width: horizontalScale(36),
    borderRadius: radiusScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: verticalScale(18),
    width: horizontalScale(18),
  },
});
export default styles;
