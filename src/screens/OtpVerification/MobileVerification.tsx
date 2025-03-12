import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

import AppButton from '../../Component/CustomButton';
import {IMAGES} from '../../assets';
import MobileVerificationStyle from './MobileVerificationStyle';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import {OtpVerificationInterface} from './OtpVerificationInterface';
import CountdownTimer from '../../Component/CountdownTimer';
import AuthStore from '../../zustand/store/AuthStore';
import LanguageSelected from '../../utils/LanguageSelected';
import Loader from '../../Component/Loader';
import {ToastMsg} from '../../Component/ToastMsg';
const MobileVerification: React.FC<OtpVerificationInterface> = props => {
  const {
    language,
    signUpData,
    loading,

    sentNumberOtp,
    verifyNumberOtp,
  } = AuthStore();
  console.log('signup', signUpData);
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const styles = MobileVerificationStyle();

  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timerKey, setTimerKey] = useState(0);
  const [timeShow, setTimeShow] = useState(false);

  const inputs = useRef<(TextInput | null)[]>([]);
  const handleSignIn = () => {
    // setShow(true);
    const data = {
      mobileNumber: signUpData.mobileNo,
      otp: otp.join(''),
    };
    if (data) {
      verifyNumberOtp(data);
    }
  };
  useEffect(() => {
    if (signUpData.mobileNo) {
      sentNumberOtp(signUpData.mobileNo);
    }
  }, []);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if text is entered
    if (text && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };
  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '') {
      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };
  const handleFinish = () => {
    setTimeShow(true);
  };
  const handleStart = () => {
    console.log('Resend button clicked!');
    // Trigger OTP resend API here
  };
  const restartTimer = () => {
    setTimerKey(prevKey => prevKey + 1); // Change key to reset timer
  };
  return (
    <ImageBackground source={IMAGES.OtpBackground} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.logintext}>
            {LanguageSelected.otpVerification[languageKey]}
          </Text>
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
              {LanguageSelected.enterOtpCode[languageKey]}
            </Text>
          </View>
          <Text style={styles.textregister1}>{signUpData.mobileNo}</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => (inputs.current[index] = ref)}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={text => handleChange(text, index)}
                onKeyPress={e => handleKeyPress(e, index)}
              />
            ))}
          </View>
          <CountdownTimer
            key={timerKey}
            initialTime={60}
            onStart={handleStart}
            onFinish={handleFinish}
          />
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
              {LanguageSelected.alreadyHaveAnAccount[languageKey]}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={styles.textregiter}>
                {LanguageSelected.login[languageKey]}
              </Text>
            </TouchableOpacity>
          </View>
          <AppButton
            title={LanguageSelected.verifyAndSignUp[languageKey]}
            onPress={handleSignIn}
          />
        </KeyboardAwareScrollView>
      </View>
      {loading && <Loader />}
      {show && <CongratulationScreen text={'SignUp Successful'} />}
    </ImageBackground>
  );
};

export default MobileVerification;
