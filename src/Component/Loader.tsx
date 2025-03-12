import React from 'react';
import {StyleSheet, View, useWindowDimensions} from 'react-native';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import { Colors } from '../utils/Constants';
const Loader = ({visible = false}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.modalBackground, {height, width}]}>
      <BallIndicator size={40} color={"#0099FF"} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#00000030',
  },

});
