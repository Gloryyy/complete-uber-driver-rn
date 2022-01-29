import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './Home';
import {Text, View} from 'react-native';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

const DummyScreen = ({name}) => (
  <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    <Text>{name}</Text>
  </View>
);
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={HomeNavigator} />
        <Drawer.Screen name="Your Trips">
          {() => <DummyScreen name="Your Trips" />}
        </Drawer.Screen>

        <Drawer.Screen name="Help">
          {() => <DummyScreen name="Help" />}
        </Drawer.Screen>

        <Drawer.Screen name="Wallet">
          {() => <DummyScreen name="Wallet" />}
        </Drawer.Screen>

        <Drawer.Screen name="Settings">
          {() => <DummyScreen name="Settings" />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
