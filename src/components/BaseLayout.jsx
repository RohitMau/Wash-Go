import {View, SafeAreaView, StatusBar} from 'react-native';
import React, {memo} from 'react';

const BaseLayout = ({children, backgroundColor}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
      }}>
      <StatusBar
        translucent
        barStyle={'dark-content'} 
        backgroundColor={'transparent'}
      />
      <View style={{flex: 1}}>{children}</View>
    </SafeAreaView>
  );
};

export default memo(BaseLayout);
