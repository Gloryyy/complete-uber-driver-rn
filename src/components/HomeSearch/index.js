import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';

const HomeSearch = () => {
  return (
    // <ScrollView>
    <View>
      {/* inputBox */}

      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To ?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name="clockcircle" size={16} color="#535353" />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </View>
      </View>
      {/* End inputBox */}

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <AntDesign name="clockcircle" size={18} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Spin Nightclub</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
          <Entypo name="home" size={18} color="#fff" />
        </View>
        <Text style={styles.destinationText}>Home</Text>
      </View>
    </View>
    // </ScrollView>
  );
};

export default HomeSearch;
