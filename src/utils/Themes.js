import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 813;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};

export const Fonts = {
  PoppinsBold: 'Poppins-Bold',
  PoppinsMediam: 'Poppins-Medium',
  PoppinsLight: 'Poppins-Light',
  PoppinsBlack: 'Poppins-Black',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsThin: 'Poppins-Thin',
};

export const Color = {
 ButtonBackground:'rgba(163, 207, 255, 1)',
  Black: '#000000',
};

export const DEVICE_STYLES = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
};

export const platform = Platform;
