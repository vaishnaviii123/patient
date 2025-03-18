import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AppointmentStack from './AppointmentStack';
import PrescriptionStack from './PrescriptionStack';
import SearchStack from './SearchStack';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {IMAGES} from '../assets';
import {
  horizontalScale,
  radiusScale,
  screenWidth,
  verticalScale,
} from '../utils/DimensionConstant';
import {Colors} from '../utils/Constants';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? IMAGES.homeFocused : IMAGES.homeUnFocused;
          } else if (route.name === 'Appointment') {
            iconName = focused ? IMAGES.appointmentFc : IMAGES.appointmentUn;
          } else if (route.name === 'Search') {
            iconName = focused ? IMAGES.searchUN : IMAGES.searchUN;
          } else if (route.name === 'Prescription') {
            iconName = focused ? IMAGES.priscriptionFc : IMAGES.priscriptionUn;
          } else {
            iconName = focused ? IMAGES.chatfocused : IMAGES.chatUnfocused;
          }
          // Adjust size for focused vs. non-focused state

          return (
            <Image
              resizeMode="contain"
              style={
                route.name === 'Search'
                  ? {
                      height: verticalScale(95),
                      width: horizontalScale(95),
                      marginBottom: 20,
                    }
                  : styles.iconStyle
              }
              source={iconName}
            />
          );
        },
        tabBarStyle: {
          // position: 'absolute',
          height: verticalScale(70),
          borderTopLeftRadius:  radiusScale(12),
          borderTopRightRadius:  radiusScale(12),
          // borderRadius: radiusScale(12),
          backgroundColor: Colors.white,
          // marginBottom: verticalScale(5),
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'green',
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Appointment" component={AppointmentStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="Prescription" component={PrescriptionStack} />
      <Tab.Screen name="Chat" component={ChatStack} />
    </Tab.Navigator>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  iconStyle: {
    height: verticalScale(25),
    width: horizontalScale(25),
    marginTop: verticalScale(25),
  },
});
