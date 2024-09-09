import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, Color, Fonts, DEVICE_STYLES} from '../utils/Themes';

const BaseButton = ({
  onPress,
  buttonText,
  buttonStyle,
  textStyle,
  borderWidth,
  borderColor,
  iconComponent,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonStyle,
        {borderWidth: borderWidth, borderColor: borderColor},
      ]}
      onPress={onPress}>
      {iconComponent}
      <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default BaseButton;

const styles = StyleSheet.create({
  button: {
    width: DEVICE_STYLES.SCREEN_WIDTH - 35,
    height: moderateScale(61),
    backgroundColor: Color.ButtonBackground,
    borderRadius: moderateScale(32),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: DEVICE_STYLES.SCREEN_WIDTH * 0.06,
color:Color.Black,
    fontFamily: Fonts.PoppinsBold,
    // backgroundColor:"black"
  },
});
