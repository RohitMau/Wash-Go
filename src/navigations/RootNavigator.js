import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { STACK_NAVIGATION } from './RootStackNavigator';
import { STACK_NAVIGATION_ROUTES } from './Routes';


const RootNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        statusBarTranslucent: true,
        statusBarStyle: 'dark',
        statusBarColor: 'transparent',
      }}
      initialRouteName={STACK_NAVIGATION.SPLASH_SCREEN}>
      <Stack.Screen
        name={STACK_NAVIGATION.SPLASH_SCREEN}
        component={STACK_NAVIGATION_ROUTES.SplashScreen}
      />
      <Stack.Screen
        name={STACK_NAVIGATION.STARTUP_SCREEN}
        component={STACK_NAVIGATION_ROUTES.StartupScreen}
      />
      <Stack.Screen
        name={STACK_NAVIGATION.REGISTER_SCREEN}
        component={STACK_NAVIGATION_ROUTES.RegisterScreen}
      />
      <Stack.Screen
        name={STACK_NAVIGATION.LOGIN_SCREEN}
        component={STACK_NAVIGATION_ROUTES.LoginScreen}
      />
      <Stack.Screen
        name={STACK_NAVIGATION.HOME_SCREEN}
        component={STACK_NAVIGATION_ROUTES.HomeScreen}
      />
    
    </Stack.Navigator>
  );
};

export default RootNavigator;
