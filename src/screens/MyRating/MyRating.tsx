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
import styles from './MyRatingStyle';
import {MyRatingInterface} from './MyRatingInterface';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';

const MyRating: React.FC<MyRatingInterface> = ({navigation}) => {
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
            <Text style={styles.headerTxt}>My Rating</Text>
            <Text />
          </View>

          <View style={styles.Container}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default MyRating;
