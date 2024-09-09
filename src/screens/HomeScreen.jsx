import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import BaseLayout from '../components/BaseLayout';
import BaseHeader from '../components/BaseHeader';
import {Color, DEVICE_STYLES, Fonts, moderateScale} from '../utils/Themes';
import BaseButton from '../components/BaseButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STACK_NAVIGATION } from '../navigations/RootStackNavigator';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState('');

  const handleLogout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.replace(STACK_NAVIGATION.STARTUP_SCREEN);
    } catch (error) {
      console.log("error", error);
    }
  }, [navigation]);

  const getdata = useCallback(async () => {
    try {
      const storedToken = await AsyncStorage.getItem('userToken');
      const response = JSON.parse(storedToken);
      setData(response?.data?.name);
      console.log('response-----------------', response.data.name);
    } catch (error) {
      console.error('Error retrieving user data:', error);
    }
  }, []);

  useEffect(() => {
    getdata();
  }, [getdata]);

  return (
    <BaseLayout translucent backgroundColor="#fff" barStyle="dark-content">
      <ScrollView style={styles.scrollView}>
        <BaseHeader />
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome {data}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <BaseButton buttonText={'Logout'} onPress={handleLogout} />
        </View>
      </ScrollView>
    </BaseLayout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    height: DEVICE_STYLES.SCREEN_HEIGHT * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: moderateScale(32),
    color: Color.Black,
    fontFamily: Fonts.PoppinsSemiBold,
    textTransform: 'capitalize',
  },
  buttonContainer: {
    paddingVertical: 15,
  },
});
