import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  verticalMarginScale,
  horizontalMarginScale,
  radiusScale,
  fontScale,
} from '../../utils/DimensionConstant';
import {Fonts} from '../../utils/Constants';
import {Colors} from '../../utils/Constants';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: verticalScale(110),
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
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
    color: Colors.white,
    letterSpacing: 0.25,
  },
  Container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: radiusScale(40),
    borderTopRightRadius: radiusScale(40),
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(45),
  },
  head: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#595959',
  },
  docContainer: {
    height: verticalScale(86),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1D788508',
    borderRadius: radiusScale(24),
    padding: 16,
    marginVertical: verticalMarginScale(16),
  },
  docProfile: {
    height: verticalScale(54),
    width: horizontalScale(54),
    borderRadius: radiusScale(14),
    marginRight: horizontalMarginScale(8),
  },
  docDetails: {
    height: verticalScale(42),
    width: horizontalScale(240),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  docName: {
    // alignItems:'flex-start',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#323232',
  },
  docSpec: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#323232',
  },
  fixedButtonContainer: {
    width: horizontalScale(342),
    height: verticalScale(66),
    position: 'absolute',
    left: 20,
    top: 535,
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
  paymentText: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#FFFFFF',
  },
  detailsContainer: {
    borderRadius: radiusScale(24),
    borderWidth: 1,
    borderColor: '#F1F1F1',
    paddingHorizontal: horizontalScale(20),
    marginBottom: verticalMarginScale(130),
  },
  subContainer: {
    // height: verticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#F1F1F1',
    paddingVertical: verticalScale(20),
    // backgroundColor:'red',
  },
  lastSubContainer: {
    borderBottomWidth: 0,
  },
  subHead: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#555B6C',
  },
  subTxt: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#292D32',
  },
  Icon: {
    height: verticalScale(24),
    width: horizontalScale(24),
  },
  amtTxt: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#2BBB4B',
  },
});
export default styles;
