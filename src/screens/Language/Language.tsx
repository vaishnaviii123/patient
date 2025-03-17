import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import {IMAGES} from '../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import LanguageStyle from './LanguageStyle';
import AuthStore from '../../zustand/store/AuthStore';
const Language = (props: any) => {
  const{language,addlanguage}=AuthStore()
  console.log("language",language)
    const styles = LanguageStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const handleSignIn = () => {
    // Handle sign in logic here
    setShow(true);
  };
  const languages = [
    {
      selectCode: 'EN',
      label: 'English',
      image: IMAGES.En,
      icon: IMAGES.greyArrow,
      selectedicon: IMAGES.blueArrow,
    },
    {
      selectCode: 'FN',
      label: 'French',
      image: IMAGES.French,
      icon: IMAGES.greyArrow,
      selectedicon: IMAGES.blueArrow,
    },
    {
      selectCode: 'AR',
      label: 'Arabic',
      image: IMAGES.Arabic,
      icon: IMAGES.greyArrow,
      selectedicon: IMAGES.blueArrow,
    },
  ];
  return (
    <ImageBackground source={IMAGES.LanguageBackground} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Image
            resizeMode="contain"
            source={IMAGES.language}
            style={styles.flagIcon}
          />
          <Text style={styles.logintext}>
            Choose Your Preferred{'\n'}Language
          </Text>
          {languages.map((languag, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.languageField,
                language == languag.selectCode &&
                  styles.selectedField,
              ]}
              onPress={() => {
                addlanguage(languag.selectCode),
                language === languag.selectCode &&
                    props.navigation.navigate('Login');
              }}>
              <Image source={languag.image} style={styles.languageIcon} />
              <Text style={styles.languageText}>{languag.label}</Text>
              <View
                style={styles.rightIconVIew}
               >
                <Image
                  source={
                    language === languag.selectCode
                      ? languag.selectedicon
                      : languag.icon
                  }
                  resizeMode="contain"
                  style={styles.rightIcon}
                />
              </View>
            </TouchableOpacity>
          ))}
        </KeyboardAwareScrollView>
      </View>
      {show && <CongratulationScreen text={'SignUp Successful'} />}
    </ImageBackground>
  );
};

export default Language;
