import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {IMAGES} from '../../assets';
import styles from './MyAccountStyle';
import {MyAccountInterface} from './MyAccountInterface';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';

const MyAccount: React.FC<MyAccountInterface> = ({navigation}) => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  return (
    <View style={styles.mainContainer}>
      <ImageBackground resizeMode="cover" source={IMAGES.bg}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={IMAGES.backIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>My Account</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}>
              <Image
                source={IMAGES.whitePencilIcon}
                style={styles.pencilIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.Container}>
            <Image
              source={IMAGES.userProfile}
              style={styles.img}
              resizeMode="contain"
            />
            <Text style={styles.header1}>Basic Details</Text>

            <View style={styles.subContainer}>
              <Text style={styles.subHead}>Full Name</Text>
              <Text style={styles.txt}>Isha Khare</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.subHead}>Password</Text>
              <Text style={styles.txt}>Test@123</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.subHead}>Gender</Text>
              <Text style={styles.txt}>Female</Text>
            </View>

            <View style={[styles.subContainer, styles.dobContainer]}>
              <View>
                <Text style={styles.subHead}>Date Of Birth</Text>
                <Text style={styles.txt}>10 November 2002</Text>
              </View>
              <Image source={IMAGES.calendarIcon} style={styles.calendarIcon} />
            </View>

            <Text style={styles.header1}>Contact Details</Text>

            <View style={styles.subContainer}>
              <Text style={styles.subHead}>Mobile Number</Text>
              <Text style={styles.txt}>+91-7611161040</Text>
            </View>

            <View style={styles.subContainer}>
              <Text style={styles.subHead}>Email Address</Text>
              <Text style={styles.txt}>isha@mailinator.com</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MyAccount;
