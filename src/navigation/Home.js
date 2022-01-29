import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationSearch from '../screens/DestinationSearch/index';
import SearchResults from '../screens/SearchResults/index';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DestinationSearch" component={DestinationSearch} />
      <Stack.Screen name="SearchResults" component={SearchResults} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
