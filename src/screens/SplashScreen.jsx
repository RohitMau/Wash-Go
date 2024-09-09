import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import BaseLayout from '../components/BaseLayout';
import {DEVICE_STYLES} from '../utils/Themes';
import {STACK_NAVIGATION} from '../navigations/RootStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { APPLOGO, bottom, right, top } from '../assest/images';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const checkUserToken = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken);
        if (userToken) {
          navigation.replace(STACK_NAVIGATION.HOME_SCREEN);
        } else {
          navigation.replace(STACK_NAVIGATION.STARTUP_SCREEN);
        }
      } catch (error) {
        console.error(error);
        navigation.navigate(STACK_NAVIGATION.STARTUP_SCREEN);
      }
    };

    const timer = setTimeout(() => {
      checkUserToken();
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <BaseLayout>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.topLeftImage}>
            <Image
              resizeMode="contain"
              source={top}
              style={styles.image}
            />
          </View>
          <View style={styles.topRightImage}>
            <Image
              resizeMode="contain"
              source={right}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.logoSection}>
          <View style={styles.logoContainer}>
            <Image
              resizeMode="contain"
              source={APPLOGO}
              style={styles.image}
            />
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.bottomImage}>
            <Image
              resizeMode="contain"
              source={bottom}
              style={styles.image}
            />
          </View>
        </View>
      </View>
    </BaseLayout>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.3,
  },
  topLeftImage: {
    width: DEVICE_STYLES.SCREEN_WIDTH * 0.65,
    aspectRatio: 0.85,
  },
  topRightImage: {
    width: DEVICE_STYLES.SCREEN_WIDTH * 0.52,
    height: DEVICE_STYLES.SCREEN_HEIGHT * 0.33,
    position: 'absolute',
    top: 0,
    right: -10,
  },
  logoSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: DEVICE_STYLES.SCREEN_WIDTH,
    height: DEVICE_STYLES.SCREEN_HEIGHT * 0.35,
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  bottomImage: {
    width: DEVICE_STYLES.SCREEN_WIDTH * 0.55,
    aspectRatio: 1.08,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
