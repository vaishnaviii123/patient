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
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bg1: {
    height: verticalScale(180),
    // width: horizontalScale(430),
    position: 'absolute',
    marginTop: 0,
  },
  bg2: {
    height: verticalScale(430),
    width: '100%',
    position: 'absolute',
  },
  header: {
    height: verticalScale(180),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  backIcon: {
    height: verticalScale(40),
    width: horizontalScale(40),
  },
  headerTxt: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(22),
    marginVertical: verticalMarginScale(5),
    color: '#FFFFFF',
  },
  Container: {
    marginTop: verticalMarginScale(200),
    width: horizontalScale(400),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: radiusScale(40),
    borderTopRightRadius: radiusScale(40),
    padding: 20,
  },
  clinicName: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(22),
    marginVertical: verticalMarginScale(5),
    color: '#323232',
  },
  clinicLocation: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
    marginVertical: verticalMarginScale(5),
    color: '#323232',
  },
  subContainer1: {
    height: verticalScale(74),
    borderWidth: 1,
    borderRadius: radiusScale(16),
    borderColor: '#F1F1F1',
    padding: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: verticalMarginScale(5),
  },
  itemContainer: {
    alignItems: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    height: verticalScale(20),
    width: horizontalScale(20),
    marginRight: horizontalMarginScale(2),
  },
  itemContent: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    color: '#292D32',
  },
  itemHead: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#555B6C',
  },
  subContainer2: {
    padding: 10,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topTxt: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(18),
    color: '#323232',
    marginBottom: verticalMarginScale(8),
  },
  topIcon: {
    height: verticalScale(7),
    width: horizontalScale(14),
  },
  aboutTxt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#323232',
  },
  viewTxt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(14),
    color: '#0B57DF',
  },
  addressContainer: {
    flexDirection: 'row',
  },
  addressIcon: {
    height: verticalScale(24),
    width: horizontalScale(22.06),
    marginRight: horizontalMarginScale(5),
  },
  addressTxt: {
    fontFamily: Fonts.SemiBold,
    fontSize: fontScale(16),
    color: '#323232',
  },
  card: {
    height: verticalScale(108),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  docProfile: {
    height: verticalScale(48),
    width: horizontalScale(48),
    borderWidth: 1,
    borderRadius: radiusScale(16),
    borderColor: '#C6D4F1',
    marginRight: horizontalMarginScale(10),
  },
  docName: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    lineHeight: 22,
    letterSpacing: 0.2,
    color: '#18181B',
  },
  docSpec: {
    fontFamily: Fonts.Regular,
    fontSize: fontScale(12),
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#71717A',
  },
  docPrice: {
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#18181B',
  },
  docRatingIcon: {
    height: verticalScale(20),
    width: horizontalScale(20),
    marginRight: horizontalMarginScale(5),
  },
  docRating: {
    fontFamily: Fonts.Regular,
    fontSize: fontScale(12),
    lineHeight: 20,
    letterSpacing: 0.2,
    color: '#71717A',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});
export default styles;
