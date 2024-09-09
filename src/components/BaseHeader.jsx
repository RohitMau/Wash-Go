import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DEVICE_STYLES} from '../utils/Themes';
import { APPLOGO } from '../assest/images';

const BaseHeader = () => {
  return (
    <View
      style={{
        width: DEVICE_STYLES.SCREEN_WIDTH * 0.6,
        height: DEVICE_STYLES.SCREEN_HEIGHT * 0.3,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <Image
        resizeMode="contain"
        source={APPLOGO}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default BaseHeader;

const styles = StyleSheet.create({});
