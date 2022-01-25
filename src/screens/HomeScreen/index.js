import React from 'react';
import {View, Dimensions} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomeMap from '../../components/HomeMap';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 420}}>
        <HomeMap />
      </View>

      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
