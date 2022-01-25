import React, {useEffect, useState} from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');

  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="From"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBz-3rgxFDeW9NnvEnKyZ-agJH-BN-Yy10',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to ?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
          }}
          fetchDetails
          query={{
            key: 'AIzaSyBz-3rgxFDeW9NnvEnKyZ-agJH-BN-Yy10',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
