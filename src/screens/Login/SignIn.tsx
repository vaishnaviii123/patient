import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../Component/CustomButton';
import LoginStyle from './LoginStyle';
import CustomTextInput from '../../Component/CustomTextinput';
import {IMAGES} from '../../assets';
import {backarrowStyle} from '../../utils/Constants';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {LoginInterface} from './LoginInterface';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import AuthStore from '../../zustand/store/AuthStore';
import LanguageSelected from '../../utils/LanguageSelected';
import Loader from '../../Component/Loader';
const SignIn: React.FC<LoginInterface> = props => {
  const {language, loading, LoginPetient} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const styles = LoginStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    // Check if email and password are not empty
    if (email != '' && password != '') {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const handleSignIn = () => {
    // Handle sign in logic here
    // setShow(true);
    // props.navigation.navigate('HomeScreen');
    const data = {
      email,
      password,
      userType: 'Patient',
    };
    LoginPetient(data);
  };

  const handleSkipLogin = () => {
    // Handle skip login logic here
    console.log('Skip Login clicked');
  };
  return (
    <ImageBackground source={IMAGES.backgroundLogin} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.logintext}>
            {LanguageSelected.loginToYourAccount[languageKey]}
          </Text>
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
              {LanguageSelected.newToMedicineApp[languageKey]}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.textregiter}>
                {LanguageSelected.register[languageKey]}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.logintitle}>
            {LanguageSelected.userName[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedprofile, IMAGES.unfocusedprofile]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterUserName[languageKey]}
            onChangeText={txt => setEmail(txt)}
            eyeicon={false}
          />
          <Text style={styles.logintitle}>
            {LanguageSelected.password[languageKey]}
          </Text>
          <CustomTextInput
            icon={[IMAGES.focusedLock, IMAGES.unfocusedlock]}
            containerStyle={styles.inputStyle}
            placeholder={LanguageSelected.enterPassword[languageKey]}
            onChangeText={txt => setPassword(txt)}
            eyeicon={true}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgottitle}>
              {LanguageSelected.forgotpassword[languageKey]}
            </Text>
          </TouchableOpacity>
          <AppButton
            title={LanguageSelected.login[languageKey]}
            onPress={handleSignIn}
            disabled={isButtonDisabled}
          />
          <AppButton
            title={LanguageSelected.skipLogin[languageKey]}
            onPress={handleSkipLogin}
            style={styles.skipLoginButton}
            textStyle={styles.textskipLogin}
          />
        </KeyboardAwareScrollView>
      </View>
      {loading && <Loader />}
      {show && (
        <CongratulationScreen
          text={LanguageSelected.loginSuccessful[languageKey]}
        />
      )}
    </ImageBackground>
  );
};

export default SignIn;
