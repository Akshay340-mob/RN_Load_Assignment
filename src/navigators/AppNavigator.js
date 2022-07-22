import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//************* import screens *****************
import HomeScreen from '../screens/AppScreens/HomeScreen';
import CountryDetailsScreen from '../screens/AppScreens/CountryDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CountryDetailsScreen" component={CountryDetailsScreen} />
        
      </Stack.Navigator>
      </NavigationContainer>
    
    </>
  );
}
