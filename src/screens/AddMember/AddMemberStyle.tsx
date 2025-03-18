import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  radiusScale,
  fontScale,
  horizontalMarginScale,
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
  docContainer: {
    height: verticalScale(112),
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  fixedButtonContainer: {
    width: horizontalScale(360),
    height: verticalScale(66),
    position: 'absolute',
    bottom: verticalScale(100),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0099FF',
    paddingVertical: verticalScale(8),
    borderRadius: radiusScale(16),
  },
  fixedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  getAppointmentText: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#FFFFFF',
  },
  subContainer: {
    height: verticalScale(70),
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    borderRadius: radiusScale(16),
    borderWidth: 1,
    borderColor: '#C6D3E7',
  },
  subHead: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
    color: '#090909',
    marginBottom: verticalMarginScale(5),
  },
  icon: {
    width: horizontalScale(18),
    height: verticalScale(18),
    marginRight: horizontalMarginScale(10),
  },
  mailIcon: {
    width: horizontalScale(17),
    height: verticalScale(15),
    marginRight: horizontalMarginScale(10),
  },
  inputTxt: {
    width: horizontalScale(120),
    height: verticalScale(50),
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#000000',
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  option: {
    width: horizontalScale(106),
    height: verticalScale(48),
    borderRadius: radiusScale(24),
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  genderIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
    marginRight: horizontalMarginScale(6),
  },
  genderTxt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#000000',
  },
  selectedOption: {
    backgroundColor: '#CEEBFF',
  },
  selectedGenderTxt: {
    fontFamily: Fonts.Bold,
  },
  selectedContainer: {
    borderColor: '#0099FF',
  },
  ageItem: {
    width: 40,
  },
  ageText: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(26),
    color: 'grey',
  },
  selectedAgeText: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(30),
    color: '#0099FF',
  },
});
export default styles;
