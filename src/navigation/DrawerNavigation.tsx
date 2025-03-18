import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MyAccount from '../screens/MyAccount/MyAccount';
import MyLocation from '../screens/MyLocation/MyLocation';
import MyRating from '../screens/MyRating/MyRating';
import Payments from '../screens/Payments/Payments';
import Notification from '../screens/Notification/Notification';
import Language from '../screens/Language/Language';
import Logout from '../screens/Logout/Logout';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import EditProfile from '../screens/EditProfile/EditProfile';
import Security from '../screens/Security/Security';
import {IMAGES} from '../assets';
import {
  fontScale,
  horizontalMarginScale,
  horizontalScale,
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../utils/DimensionConstant';
import {Fonts} from '../utils/Constants';
import BottomTab from './BottomTab';
const Drawer = createDrawerNavigator();

import {DrawerContentComponentProps} from '@react-navigation/drawer';

const customDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.drawerContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={IMAGES.userProfile}
          style={styles.profileImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.editIconContainer}>
          <Image
            source={IMAGES.whitePencilIcon}
            style={styles.editIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={customDrawerContent}>
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          headerShown: false,
          drawerLabel: 'Home',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.myProfileIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name="MyAccout"
        component={MyAccount}
        options={{
          headerShown: false,
          drawerLabel: 'My Account',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.myProfileIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="MyLocation"
        component={MyLocation}
        options={{
          headerShown: false,
          drawerLabel: 'My Location',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.myLocationIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="MyRating"
        component={MyRating}
        options={{
          headerShown: false,
          drawerLabel: 'My Rating',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.myRatingIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: false,
          drawerLabel: 'Payments',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.paymentIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          drawerLabel: 'Notification',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.notificationIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Language"
        component={Language}
        options={{
          headerShown: false,
          drawerLabel: 'Language',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.languageIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Security"
        component={Security}
        options={{
          headerShown: false,
          drawerLabel: 'Security',
          drawerLabelStyle: styles.label,
          drawerIcon: () => (
            <View style={styles.iconContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.securityIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          drawerLabel: '',
          drawerLabelStyle: styles.label,
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
          // drawerLabel: '',
          drawerLabelStyle: {display: 'none'},
          drawerIcon: () => (
            <View style={styles.logoutContainer}>
              <Text style={styles.logoutLabel}>Logout</Text>
              <Image
                resizeMode="contain"
                source={IMAGES.logoutIcon}
                style={styles.icon}
              />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  drawerContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    // height:verticalScale(104.83),
    // width:horizontalScale(117.14),
    marginTop: verticalMarginScale(25),
    // marginLeft: horizontalMarginScale(30),
    marginBottom: verticalMarginScale(25),
    // flexDirection:'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileImage: {
    height: verticalScale(87.61),
    width: horizontalScale(87.61),
    // borderWidth: 3,
    // borderColor: '#0099FF',
  },
  editIconContainer: {
    height: verticalScale(32),
    width: horizontalScale(32),
    backgroundColor: '#0099FF',
    borderRadius: radiusScale(50),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: horizontalScale(60),
    bottom: 0,
  },
  editIcon: {
    height: verticalScale(13.24),
    width: horizontalScale(13.24),
  },
  label: {
    color: '#434343',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(16),
    lineHeight: 20,
  },
  iconContainer: {
    height: verticalScale(44),
    width: horizontalScale(44),
    backgroundColor: '#518CFF0D',
    borderRadius: radiusScale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: horizontalScale(24),
    height: verticalScale(24),
  },
  logoutContainer: {
    height: verticalScale(42),
    width: horizontalScale(122),
    backgroundColor: '#FFDDDB',
    borderRadius: radiusScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingVertical:verticalScale(10),
    paddingHorizontal: horizontalScale(26),
    // marginTop: verticalMarginScale(20),
    // marginBottom: verticalMarginScale(200),
  },
  logoutLabel: {
    color: '#A30014',
    fontFamily: Fonts.Bold,
    fontSize: fontScale(14),
    lineHeight: 20,
  },
});
export default DrawerNavigation;
