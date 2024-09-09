import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BaseLayout from '../components/BaseLayout';
import {Color, DEVICE_STYLES, Fonts, moderateScale} from '../utils/Themes';
import BaseTextInput from '../components/BaseTextInput';
import {AppleIcon, GoogleIcon, LockIcon, MailIcon, UserIcon} from '../assest/icons';
import BaseButton from '../components/BaseButton';
import {STACK_NAVIGATION} from '../navigations/RootStackNavigator';
import BaseHeader from '../components/BaseHeader';
import Loader from '../components/Loader';
import { AxiosInstance } from '../utils/AxiosInstance';
import Constant from '../utils/Constant';
import { LoginBottom } from '../assest/images';

const LoginScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false); 
  const HandleLogin = useCallback(async () => {
    if (phone.length !== 10 || !/^\d+$/.test(phone)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!password) {
      setErrorMessage('Please enter your password');
      return;
    }
  
    setErrorMessage('');
    setLoading(true);
  
    const user = {
      phone,
      password,
    };
  
    console.log('User object:', user);
  
    try {
      const response = await AxiosInstance.post(Constant.URL.login, user);
  
      console.log('Response data:', response.data);
  
      if (response.data.status === false) {
        setErrorMessage(response.data.message || 'Login failed');
        setLoading(false);
        return;
      }
  
      await AsyncStorage.setItem('userToken', JSON.stringify(response.data));
      console.log('Login successful:', response.data);
  
      setLoading(false);
      navigation.navigate(STACK_NAVIGATION.HOME_SCREEN);
      setPhone("");
      setPassword("");
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setLoading(false);
      setErrorMessage('error');
    }
  }, [phone, password]);
  

  return (
    <BaseLayout translucent backgroundColor="#fff" barStyle="dark-content">
    <Loader loading={loading}/>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <BaseHeader />
        <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
          <Text
            style={{
              fontSize: moderateScale(32),
              fontFamily: Fonts.PoppinsMediam,
              color: Color.Black,
            }}>
            Sign In
          </Text>
          <Text
            style={{
              fontSize: moderateScale(16),
              fontFamily: Fonts.PoppinsRegular,
              color: 'rgba(128,128,128,1)',
            }}>
            Hi! Welcome back, you've been missed.
          </Text>
        </View>
        <View>
          <BaseTextInput
            placeholder={'Enter your mobile number'}
            label={'Mobile'}
            keyboard="phone-pad"
            leftIcon={<MailIcon />}
            maxLength={10}
            value={phone}
            onChange={setPhone}
          />
          <BaseTextInput
            placeholder={'Enter your password'}
            label={'Password'}
            leftIcon={<LockIcon />}
            isSecured={true}
            value={password}
            onChange={setPassword}
          />
        </View>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}

      
          <TouchableOpacity style={{paddingHorizontal: 20, gap: 20}}>
            <Text
              style={{
                textAlign: 'right',
                color: Color.Black,
                textDecorationLine: 'underline',
              }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
      

        <View
          style={{
            paddingHorizontal: 20,
            alignItems: 'center',
            paddingVertical: 10,
            gap: 15,
          }}>
          <BaseButton buttonText={'Sign In'} onPress={HandleLogin} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
            }}>
            <View
              style={{
                width: '30%',
                height: 1,
                backgroundColor: 'rgba(163,207,255,1)',
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                color: 'rgba(102,97,97,1)',
                fontFamily: Fonts.PoppinsRegular,
              }}>
              Or
            </Text>
            <View
              style={{
                width: '30%',
                height: 1,
                backgroundColor: 'rgba(163,207,255,1)',
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 25,
            }}>
            <TouchableOpacity
              style={{
                width: moderateScale(43.6),
                height: moderateScale(43.6),
                borderWidth: 1,
                borderRadius: 44 / 2,
                borderColor: 'rgba(163,207,255,1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <GoogleIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: moderateScale(43.6),
                height: moderateScale(43.6),
                borderWidth: 1,
                borderRadius: 44 / 2,
                borderColor: 'rgba(163,207,255,1)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppleIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.signInContainer}>
            <Text style={styles.alreadyHaveAccountText}>
              Don’t have an account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate(STACK_NAVIGATION.REGISTER_SCREEN)
              }>
              <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: Fonts.PoppinsRegular,
              fontSize: moderateScale(14),
              color: 'rgba(128,128,128,1)',
            }}>
            By logging in or signing up, you agree to our terms of use and
            privacy policy.
          </Text>
        </View>
      </ScrollView>
      <View style={{position:'absolute', width: DEVICE_STYLES.SCREEN_WIDTH*.5,
      height: DEVICE_STYLES.SCREEN_HEIGHT * 0.18,bottom:0,left:0}}>
        <Image resizeMode='contain' style={{width:"100%",height:"100%"}} source={LoginBottom}/>
      </View>
    </BaseLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: Fonts.PoppinsRegular,
  },
});
