import React from 'react';
import {View, Image, FlatList} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.263045,
  };

  const destination = {
    latitude: 28.460127,
    longitude: -16.269045,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={'AIzaSyBz-3rgxFDeW9NnvEnKyZ-agJH-BN-Yy10'}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title="Origin" />
      <Marker coordinate={destination} title="Destination" />
    </MapView>
  );
};

export default RouteMap;
