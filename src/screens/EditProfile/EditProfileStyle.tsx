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
    height: verticalScale(80),
    flexDirection: 'row',
    // alignItems: 'flex-end',
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
  pencilIcon: {
    height: verticalScale(25),
    width: horizontalScale(25),
  },
  Container: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: radiusScale(40),
    borderTopRightRadius: radiusScale(40),
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(25),
    height: verticalScale(1000),
  },
  img: {
    height: verticalScale(100),
    width: horizontalScale(100),
    alignSelf: 'center',
    // marginBottom: 10,
  },
  imageview: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: verticalMarginScale(20),
  },
  camera: {
    height: verticalScale(35),
    width: horizontalScale(35),
  },
  cameraView: {
    position: 'absolute',
    right: '40%',
    top: '10%',
  },
  header1: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#595959',
    marginTop: verticalMarginScale(15),
  },
  subContainer: {
    height: verticalScale(55),
    borderRadius: radiusScale(10),
    backgroundColor: '#CEEBFF',
    paddingHorizontal: horizontalScale(15),
    justifyContent: 'center',
  },
  subHead: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
    color: '#090909',
    marginTop: verticalMarginScale(15),
    marginBottom: verticalMarginScale(5),
  },
  txt: {
    height: verticalScale(55),
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#000000',
  },
  dobContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarIcon: {
    height: verticalScale(20),
    width: horizontalScale(20),
  },
  fixedButtonContainer: {
    width: horizontalScale(350),
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
});
export default styles;
