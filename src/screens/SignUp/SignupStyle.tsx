import {
  fontScale,
  horizontalScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';
import {Colors, Fonts} from '../../utils/Constants';
import {StyleSheet} from 'react-native';
const SignupStyle = () => {
  return StyleSheet.create({
    mainView: {
      height: '100%',
      width: '100%',
    },
    container1: {
      flex: 1,
      paddingHorizontal: 20,
      // paddingTop: verticalScale(80),
    },
    inputStyle: {
      marginVertical: verticalMarginScale(5),
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
    forgottitle: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
      alignSelf: 'flex-end',
      marginBottom: verticalMarginScale(10),
    },
    skipLoginButton: {
      backgroundColor: Colors.transparent,
      borderColor: Colors.lightblue,
      borderWidth: 1,
      marginTop: verticalMarginScale(20),
    },
    textskipLogin: {
      color: Colors.lightblue,
      fontSize: fontScale(16),
      fontFamily: Fonts.Bold,
    },
  
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: verticalMarginScale(5),
      marginBottom: verticalMarginScale(20),
    },
    selectGender: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(10),
      borderRadius: radiusScale(20),
      backgroundColor: Colors.whitegrey,
    },
    selectedGender: {
      backgroundColor: Colors.extralightblue,
    },
    icon: {
      width: 20,
      height: 20,
      marginBottom: 5,
    },
    genderText: {
      fontSize: fontScale(16),
      fontFamily: Fonts.Medium,
      marginLeft: horizontalScale(10),
    },
    arrowIcon: {
      marginTop: verticalMarginScale(80),
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginTop: 4,
    },
  });
};
export default SignupStyle;
