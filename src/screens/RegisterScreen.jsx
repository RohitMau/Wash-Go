import {
  ActivityIndicator,
  Alert,
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
import BaseLayout from '../components/BaseLayout';
import {Color, DEVICE_STYLES, Fonts, moderateScale} from '../utils/Themes';
import BaseTextInput from '../components/BaseTextInput';
import {LockIcon, MailIcon, UserIcon} from '../assest/icons';
import CustomCheckbox from '../components/CustomCheckbox';
import BaseButton from '../components/BaseButton';
import {STACK_NAVIGATION} from '../navigations/RootStackNavigator';
import BaseHeader from '../components/BaseHeader';
import Loader from '../components/Loader';
import Constant from '../utils/Constant';
import {AxiosInstance} from '../utils/AxiosInstance';
import {LoginBottom, SighUpBottom} from '../assest/images';

const RegisterScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (!name || !phone || !password) {
      setError('Please fill in all fields.');
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }

    if (!isChecked) {
      setError('You must agree to the Terms & Conditions.');
      return false;
    }

    setError('');
    return true;
  };

  const HandleRegister = useCallback(async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const user = {
      name,
      phone,
      password,
    };

    try {
      const response = await AxiosInstance.post(Constant.URL.register, user);

      navigation.navigate(STACK_NAVIGATION.LOGIN_SCREEN);
      console.log('Registration successful:', response.data);
      setName('');
      setPhone('');
      setPassword('');
      setIsChecked(false);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        Alert.alert('User Already Registered', '', [
          {
            text: 'OK',
            onPress: () => navigation.navigate(STACK_NAVIGATION.LOGIN_SCREEN),
          },
        ]);
      } else {
        Alert.alert('Registration Error');
      }
    } finally {
      setLoading(false);
    }
  }, [name, phone, password]);

  return (
    <BaseLayout translucent backgroundColor="#fff" barStyle="dark-content">
      <Loader loading={loading} />
      <ScrollView style={styles.scrollContainer}>
        <BaseHeader />
        <View style={styles.headerContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>
          <Text style={styles.subText}>
            Fill in the below form and add life to{'\n'}your car!
          </Text>
        </View>
        <View>
          <BaseTextInput
            placeholder={'Enter your name'}
            label={'Name'}
            leftIcon={<UserIcon />}
            value={name}
            onChange={setName}
          />
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
            placeholder={'password'}
            label={'password'}
            leftIcon={<LockIcon />}
            isSecured={true}
            secureIcon={true}
            value={password}
            onChange={setPassword}
          />
        </View>
        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}
        <View style={styles.checkboxContainer}>
          <CustomCheckbox
            label="Agree with "
            label1="Terms & Conditions "
            checked={isChecked}
            onChange={setIsChecked}
          />
        </View>
        <View style={styles.buttonContainer}>
          <BaseButton buttonText={'Sign Up'} onPress={HandleRegister} />
          <TouchableOpacity style={styles.signInContainer}
           onPress={() =>
                navigation.navigate(STACK_NAVIGATION.LOGIN_SCREEN)
              }
          >
            <Text style={styles.alreadyHaveAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate(STACK_NAVIGATION.LOGIN_SCREEN)
              }>
              <Text style={styles.signInText}>Sign in</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.termsText}>
            By login or sign up, you agree to our terms of use and privacy
            policy
          </Text>
        </View>
      </ScrollView>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.bottomImage}
          source={SighUpBottom}
        />
      </View>
    </BaseLayout>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 20,
  },
  signUpText: {
    fontSize: moderateScale(32),
    fontFamily: Fonts.PoppinsMediam,
    color: Color.Black,
  },
  subText: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.PoppinsRegular,
    color: 'rgba(128,128,128,1)',
  },
  errorText: {
    color: 'red',
    paddingHorizontal: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    paddingVertical: 10,
    gap:20
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
  termsText: {
    textAlign: 'center',
    fontFamily: Fonts.PoppinsRegular,
    fontSize: moderateScale(14),
    color: 'rgba(128,128,128,1)',
  },
  imageContainer: {
    position: 'absolute',
    width: DEVICE_STYLES.SCREEN_WIDTH * 0.55,
    height: DEVICE_STYLES.SCREEN_HEIGHT * 0.18,
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  bottomImage: {
    width: '100%',
    height: '100%',
  },
});
