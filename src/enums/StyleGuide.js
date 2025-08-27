import { Dimensions, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ACTIVE_OPACITY = 0.75;
export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export { wp, hp };

export const COLORS = {
  white: '#FFFFFF',
  black:'#000000ff',
  lightestGrey:'#f7f7f7ff',
  grey:'#727070ff',
  darkgrey:'#393939ff',
  lightGrey:'#bcbcbcff',
  yellow:'#ffd700ff',
  shadow:'#f7f7f7ff',
  red:'#ff0000ff',
};

export const FONT = {
  bold: 'Poppins-Bold',
  regular: 'Poppins-Regular',
  extraBold: 'Poppins-ExtraBold',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
};

export const TEXT_STYLE = StyleSheet.create({
  titleExtraBold: {
    fontFamily: FONT.extraBold,
    fontSize: 21,
  },
  titleBold: {
    fontFamily: FONT.bold,
    fontSize: 21,
  },
  smallTitleBold: {
    fontFamily: FONT.bold,
    fontSize: 17,
  },
  smallTitleSemiBold: {
    fontFamily: FONT.semiBold,
    fontSize: 20,
  },
  smallTitleMedium: {
    fontFamily: FONT.medium,
    fontSize: 20,
  },
  bigText: {
    fontFamily: FONT.regular,
    fontSize: 17,
  },
  bigTextSemiBold: {
    fontFamily: FONT.semiBold,
    fontSize: 16,
  },
  bigTextMedium: {
    fontFamily: FONT.medium,
    fontSize: 16,
  },
  bigTextBold: {
    fontFamily: FONT.bold,
    fontSize: 16,
  },

  text: {
    fontFamily: FONT.regular,
    fontSize: 13,
  },
  textSemiBold: {
    fontFamily: FONT.semiBold,
    fontSize: 13.5,
  },
  textMedium: {
    fontFamily: FONT.medium,
    fontSize: 13,
  },
  textBold: {
    fontFamily: FONT.bold,
    fontSize: 13.5,
  },

  smallText: {
    fontFamily: FONT.regular,
    fontSize: 11,
  },
  smallTextSemiBold: {
    fontFamily: FONT.semiBold,
    fontSize: 11,
  },
  smallTextMedium: {
    fontFamily: FONT.medium,
    fontSize: 11,
  },
  smallTextBold: {
    fontFamily: FONT.bold,
    fontSize: 11,
  },
})

export const commonStyles = StyleSheet.create({
  horizontalView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  horizontalView_m05: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp(0.5),
  },
  horizontalView_m1: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  justifyView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  justifyView_m05: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(0.5),
  },
  justifyView_m1: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(1),
  },
  justifyView_m2: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow_6: {
    elevation: 7,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.28,
    shadowRadius: 4.84,
  },
  shadow_5: {
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  shadow_3: {
    elevation: 3,
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  shadow_2: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  noPadding: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingStart: 0,
    paddingEnd: 0,
  },
  noMargin: {
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginStart: 0,
    marginEnd: 0,
  },
})