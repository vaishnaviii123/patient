import React, {useState} from 'react';
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

const notifications = [
  {
    id: 1,
    title: "You've Received a New Task",
    description: "It's time to clean your room. Do it today and earn $5!",
    time: 'Just Now',
    icon: IMAGES.mailIcon,
  },
  {
    id: 2,
    title: 'Congratulations for Reward',
    description:
      "You helped with the dishes! That's a big help. Check your balance.",
    time: '15 min',
    icon: IMAGES.othersIcon,
  },
  {
    id: 3,
    title: 'Task Reminder',
    description:
      "Done with your homework yet? Don't slack around! Your $3 are waiting for you.",
    time: '11:24 PM',
    icon: IMAGES.bell,
  },
  {
    id: 4,
    title: 'Add a Partner',
    description:
      'Add your brother in cleaning the garage. You both will be paid double.',
    time: '11:24 PM',
    icon: IMAGES.blackProfileIcon,
  },
];

const Notification: React.FC<NotificationInterface> = ({navigation}) => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const [selectedId, setSelectedId] = useState<number | null>(null);

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

            {notifications.slice(0, 2).map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectedId(item.id)}
                style={[
                  styles.subContainer,
                  selectedId === item.id && {backgroundColor: '#F8FBFB'},
                ]}>
                <View style={styles.leftContainer}>
                  <Text style={styles.subHead}>{item.title}</Text>
                  <Text style={styles.txt}>{item.description}</Text>
                </View>

                <View style={styles.rightContainer}>
                  <Text style={styles.txt1}>{item.time}</Text>
                  <View style={styles.iconContainer}>
                    <Image source={item.icon} style={styles.icon} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}

            <Text style={styles.header1}>05 Auguest 2024</Text>
            {notifications.slice(2, notifications.length).map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectedId(item.id)}
                style={[
                  styles.subContainer,
                  selectedId === item.id && {backgroundColor: '#F8FBFB'},
                ]}>
                <View style={styles.leftContainer}>
                  <Text style={styles.subHead}>{item.title}</Text>
                  <Text style={styles.txt}>{item.description}</Text>
                </View>

                <View style={styles.rightContainer}>
                  <Text style={styles.txt1}>{item.time}</Text>
                  <View style={styles.iconContainer}>
                    <Image source={item.icon} style={styles.icon} />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Notification;
