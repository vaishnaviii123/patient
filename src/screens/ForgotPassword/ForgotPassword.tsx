import React, {useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Image,
} from 'react-native';

import AppButton from '../../Component/CustomButton';
import {IMAGES} from '../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CongratulationScreen from '../CongratulationScreen/Congratulation';
import ForgotPasswordStyle from './ForgotPasswordStyle';
import {ForgotPasswordInterface} from './ForgotPasswordInterface';
import {backarrowStyle} from '../../utils/Constants';
import CustomTextInput from '../../Component/CustomTextinput';
import AuthStore from '../../zustand/store/AuthStore';
import LanguageSelected from '../../utils/LanguageSelected';
import {
  verticalMarginScale,
  verticalScale,
} from '../../utils/DimensionConstant';
import Loader from '../../Component/Loader';
const ForgotPassword: React.FC<ForgotPasswordInterface> = props => {
  const {language, loading, forgotPasswordPetient} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const styles = ForgotPasswordStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);
  const handleSignIn = () => {
    // Handle sign in logic here
    const data = {
      email: email,
      navigation: props.navigation,
    };
    forgotPasswordPetient(data);
  };
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
  const handleSkipLogin = () => {
    // Handle skip login logic here
    console.log('Skip Login clicked');
  };
  return (
    <ImageBackground source={IMAGES.backgroundLogin} style={styles.mainView}>
      <View style={styles.container1}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Image
            resizeMode="contain"
            source={IMAGES.backArrow}
            style={[backarrowStyle]}
          />
          </TouchableOpacity>
          <Text style={styles.logintext}>
    
            {LanguageSelected.forgotpassword[languageKey]}
          </Text>
          <View style={styles.regiterView}>
            <Text style={styles.textregister1}>
              {LanguageSelected.fullLine[languageKey]}
            </Text>
          </View>
          <Text style={styles.textregister1}>
            {LanguageSelected.email[languageKey]}
          </Text>

          <CustomTextInput
            icon={[IMAGES.focusedprofile, IMAGES.unfocusedprofile]}
            placeholder={LanguageSelected.enterEmail[languageKey]}
            containerStyle={{
              marginVertical: verticalMarginScale(15),
              marginBottom: verticalMarginScale(95),
            }}
            eyeicon={false}
            onChangeText={txt => setEmail(txt)}
          />
          <AppButton
            title={LanguageSelected.GetLink[languageKey]}
            disabled={email ? false : true}
            onPress={handleSignIn}
          />
        </KeyboardAwareScrollView>
      </View>
      {loading && <Loader />}
    </ImageBackground>
  );
};

export default ForgotPassword;
