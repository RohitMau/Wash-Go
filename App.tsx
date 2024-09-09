import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigationContainer from './src/navigations';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <View style={{flex: 1}}>
      <FlashMessage position="top" />
      <AppNavigationContainer />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
