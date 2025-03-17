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
import styles from './NotificationStyle';
import {NotificationInterface} from './NotificationInterface';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';

const Notification: React.FC<NotificationInterface> = ({navigation}) => {
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
            <Text style={styles.headerTxt}>Notification</Text>
            <Text style={styles.headerTxt}>Clear</Text>
            <Text />
          </View>

          <View style={styles.Container}>
            <Text style={styles.header1}>Today</Text>

            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.subHead}>You've Received a New Task</Text>
                <Text style={styles.txt}>
                  It's time to clean your room. Do it today and earn $5!
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.txt1}>Just Now</Text>
                <View style={styles.iconContainer}>
                  <Image source={IMAGES.mailIcon} style={styles.icon} />
                </View>
              </View>
            </View>

            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.subHead}>Congratulations for Reward</Text>
                <Text style={styles.txt}>
                  You helped with the dishes! That's a big help. Check your
                  balance.
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.txt1}>15 min</Text>
                <View style={styles.iconContainer}>
                  <Image source={IMAGES.othersIcon} style={styles.icon} />
                </View>
              </View>
            </View>

            <Text style={styles.header1}>05 Auguest 2024</Text>

            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.subHead}>Task Reminder</Text>
                <Text style={styles.txt}>
                  Done with your homework yet? Don't slack around! Your $3 are
                  waiting for you.{' '}
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.txt1}>11:24 PM</Text>
                <View style={styles.iconContainer}>
                  <Image source={IMAGES.bell} style={styles.icon} />
                </View>
              </View>
            </View>

            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.subHead}>Add a Partner</Text>
                <Text style={styles.txt}>
                  Add your brother in cleaning the garage. You both will paid
                  double.
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.txt1}>11:24 PM</Text>
                <View style={styles.iconContainer}>
                  <Image source={IMAGES.blackProfileIcon} style={styles.icon} />
                </View>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.leftContainer}>
                <Text style={styles.subHead}>Add a Partner</Text>
                <Text style={styles.txt}>
                  Add your brother in cleaning the garage. You both will paid
                  double.
                </Text>
              </View>
              <View style={styles.rightContainer}>
                <Text style={styles.txt1}>11:24 PM</Text>
                <View style={styles.iconContainer}>
                  <Image source={IMAGES.myProfileIcon} style={styles.icon} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Notification;
