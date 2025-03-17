import {fontScale, radiusScale, verticalMarginScale, verticalScale} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
import {StyleSheet} from 'react-native';
import AppButton from '../../Component/CustomButton';
const MobileVerificationStyle = () => {
  return   StyleSheet.create({
    container: {
      flex: 1,
  
      alignItems: 'center',
      backgroundColor: '#fff',
    },
  
    Appbutton: {
      marginTop: verticalScale(20),
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: Colors.black,
    },
    mainView: {
      height: '100%',
      width: '100%',
    },
    container1: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: verticalMarginScale(250),
    },
    inputStyle: {
      borderRadius: radiusScale(10),
      marginVertical: verticalMarginScale(5),
      paddingVertical: verticalScale(10),
    },
    logintext: {
      color: Colors.fontColor,
      fontSize: fontScale(27),
      fontFamily: Fonts.Bold,
      marginTop: verticalMarginScale(20),
    },
    regiterView: {
      flexDirection: 'row',
  
      alignItems: 'center',
      marginVertical: verticalMarginScale(15),
    },
    textregister1: {
      color: Colors.fontColor,
      fontSize: fontScale(16),
      fontFamily: Fonts.Medium,
    },
    textregiter: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
      marginLeft: verticalScale(5),
    },
    logintitle: {
      color: Colors.fontColor,
      fontSize: fontScale(16),
      fontFamily: Fonts.Medium,
      marginTop: verticalMarginScale(10),
    },
  
    skipLoginButton: {
      backgroundColor: Colors.white,
      borderColor: Colors.lightblue,
      borderWidth: 1,
      marginTop: verticalMarginScale(20),
    },
    textskipLogin: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
    },
    otpContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: verticalMarginScale(20),
    },
    otpInput: {
      width: verticalScale(50),
      height: verticalScale(55),
      borderBottomWidth: 1,
      borderRightWidth:0.5,
      borderLeftWidth:0.5,
      borderTopWidth:0.1,
      borderColor: Colors.grey,
      textAlign: 'center',
      fontSize: fontScale(20),
      borderRadius: radiusScale(10),
      fontFamily: Fonts.Medium,
      backgroundColor: Colors.white,
    },
    resendText: {
      fontSize: fontScale(16),
      color: Colors.lightblue,
      fontFamily: Fonts.Bold,
      marginRight: 10,
    },
  });
};
export default MobileVerificationStyle;
