import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStackNavigator from './RootNavigator';


const AppNavigationContainer = () => {
    return(
        <NavigationContainer>
            <RootStackNavigator/>
        </NavigationContainer>
    )
}

export default AppNavigationContainer