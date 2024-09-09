import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    Dimensions,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import BaseLayout from '../components/BaseLayout';
  import { Color, DEVICE_STYLES, Fonts, moderateScale } from '../utils/Themes';
  import BaseButton from '../components/BaseButton';
import { STACK_NAVIGATION } from '../navigations/RootStackNavigator';
  
  const StartupScreen = ({ navigation }) => {
    return (
      <BaseLayout>
        <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"  
      />
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View style={styles.topImage}>
              <Image
                resizeMode="contain"
                source={require('../assest/images/top.png')}
                style={styles.topImageStyle}
              />
            </View>
            <View style={styles.rightImage}>
              <Image
                resizeMode="contain"
                source={require('../assest/images/right.png')}
                style={styles.rightImageStyle}
              />
            </View>
          </View>
          <View style={styles.logoContainer}>
            <View style={styles.logoImage}>
              <Image
                resizeMode="contain"
                source={require('../assest/images/Applogo.png')}
                style={styles.logoImageStyle}
              />
            </View>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.descriptionText}>
                Sparkle & Shine Transform {'\n'} Your Drive with Every Wash!
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <BaseButton buttonText={'Let’s Start'} textStyle={styles.buttonText} onPress={()=>navigation.navigate(STACK_NAVIGATION.REGISTER_SCREEN)} />
              <View style={styles.signInContainer}>
                <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
                <TouchableOpacity activeOpacity={0.9}
                onPress={()=>navigation.navigate(STACK_NAVIGATION.LOGIN_SCREEN)}
                >
                  <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </BaseLayout>
    );
  };
  
  const { height } = Dimensions.get('window');
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    imageContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 0.25,
    },
    topImage: {
      width: DEVICE_STYLES.SCREEN_WIDTH * 0.5,
      aspectRatio: 0.85,
    },
    topImageStyle: {
      width: '100%',
      height: '100%',
    },
    rightImage: {
      width: DEVICE_STYLES.SCREEN_WIDTH * 0.3,
      height: DEVICE_STYLES.SCREEN_HEIGHT * 0.2,
      position: 'absolute',
      top: 0,
      right: -10,
    },
    rightImageStyle: {
      width: '100%',
      height: '100%',
    },
    logoContainer: {
      flex: 0.25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      width: DEVICE_STYLES.SCREEN_WIDTH,
      height: DEVICE_STYLES.SCREEN_HEIGHT * 0.3,
      // backgroundColor:'red'
    },
    logoImageStyle: {
      width: '100%',
      height: '100%',
    },
    bottomContainer: {
      flex: 0.5,
      justifyContent: 'center',
      gap: 50,
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical:15,
      bottom:moderateScale(20)
    },
    descriptionText: {
      textAlign: 'center',
      fontFamily: Fonts.PoppinsRegular,
      fontSize: DEVICE_STYLES.SCREEN_WIDTH * 0.06,
      color: 'gray',
    },
    buttonContainer: {
      gap: 15,
    },
    buttonText: {
      color: Color.Black,
    },
    signInContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 10,
    },
    alreadyHaveAccountText: {
      fontSize: moderateScale(14),
      color: 'rgba(0,0,0,0.3)',
      fontFamily: Fonts.PoppinsRegular,
    },
    signInText: {
      textDecorationLine: 'underline',
      color: 'rgba(0,0,0,0.7)',
      fontFamily: Fonts.PoppinsBold,
    },
  });
  
  export default StartupScreen;
  