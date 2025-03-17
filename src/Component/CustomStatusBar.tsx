import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { Colors } from '../utils/Constants';

const CustomStatusBar = () => {
  return (
    <SafeAreaView style={{ flex: 0, backgroundColor: Colors.lightblue }}>
      {/* Custom StatusBar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.lightblue}
        translucent={false}
      />
    </SafeAreaView>
  );
};

export default CustomStatusBar;
