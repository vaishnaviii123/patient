import {AddMemberInterface} from './AddMemberInterface';
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
import {verticalMarginScale} from '../../utils/DimensionConstant';
import styles from './AddMemberStyle';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {TextInput} from 'react-native-gesture-handler';

const AddMember: React.FC<AddMemberInterface> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedAge, setSelectedAge] = useState<number | string>('');
  const [gender, setGender] = useState('Female');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
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
            <Text style={styles.headerTxt}>
              {LanguageSelected.addMember[languageKey]}
            </Text>
            <Text />
          </View>

          <View style={styles.Container}>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>
                {LanguageSelected.firstName[languageKey]}
              </Text>
              <View
                style={[
                  styles.subContainer,
                  focusedField === 'firstName' && styles.selectedContainer,
                ]}>
                <Image source={IMAGES.blueProfileIcon} style={styles.icon} />
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First Name"
                  placeholderTextColor={'grey'}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.inputTxt}
                />
              </View>
            </View>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>
                {LanguageSelected.lastName[languageKey]}
              </Text>
              <View
                style={[
                  styles.subContainer,
                  focusedField === 'lastName' && styles.selectedContainer,
                ]}>
                <Image source={IMAGES.blackProfileIcon} style={styles.icon} />
                <TextInput
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last Name"
                  placeholderTextColor={'grey'}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.inputTxt}
                />
              </View>
            </View>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>
                {LanguageSelected.selectAge[languageKey]}
              </Text>
              <View
                style={[
                  styles.subContainer,
                  focusedField === 'age' && styles.selectedContainer,
                ]}>
                <Image source={IMAGES.blackProfileIcon} style={styles.icon} />
                <TextInput
                  keyboardType="numeric"
                  value={selectedAge.toString()}
                  onChangeText={text => setSelectedAge(text)}
                  placeholder="Enter age"
                  placeholderTextColor={'grey'}
                  onFocus={() => setFocusedField('age')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.inputTxt}
                />
              </View>
            </View>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>
                {LanguageSelected.selectGender[languageKey]}
              </Text>

              <View style={styles.genderContainer}>
                <TouchableOpacity onPress={() => setGender('Female')}>
                  <View
                    style={[
                      styles.option,
                      gender === 'Female' && styles.selectedOption,
                    ]}>
                    <Image
                      source={IMAGES.femaleIcon}
                      style={styles.genderIcon}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        styles.genderTxt,
                        gender === 'Female' && styles.selectedGenderTxt,
                      ]}>
                      Female
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGender('Male')}>
                  <View
                    style={[
                      styles.option,
                      gender === 'Male' && styles.selectedOption,
                    ]}>
                    <Image
                      source={IMAGES.maleIcon}
                      style={styles.genderIcon}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        styles.genderTxt,
                        gender === 'Male' && styles.selectedGenderTxt,
                      ]}>
                      Male
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setGender('Other')}>
                  <View
                    style={[
                      styles.option,
                      gender === 'Other' && styles.selectedOption,
                    ]}>
                    <Image
                      source={IMAGES.othersIcon}
                      style={styles.genderIcon}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        styles.genderTxt,
                        gender === 'Other' && styles.selectedGenderTxt,
                      ]}>
                      Other
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>Email</Text>
              <View
                style={[
                  styles.subContainer,
                  focusedField === 'email' && styles.selectedContainer,
                ]}>
                <Image source={IMAGES.mailIcon} style={styles.icon} />
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter Email"
                  placeholderTextColor={'grey'}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  style={styles.inputTxt}
                />
              </View>
            </View>
            <View style={{marginBottom: verticalMarginScale(10)}}>
              <Text style={styles.subHead}>
                {LanguageSelected.address[languageKey]}
              </Text>
              <View
                style={[
                  styles.subContainer,
                  focusedField === 'address' && styles.selectedContainer,
                ]}>
                <Image source={IMAGES.blackProfileIcon} style={styles.icon} />
                <TextInput
                  value={address}
                  onChangeText={setAddress}
                  placeholder="Address"
                  onFocus={() => setFocusedField('address')}
                  onBlur={() => setFocusedField(null)}
                  placeholderTextColor={'grey'}
                  style={styles.inputTxt}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <TouchableOpacity style={styles.fixedButton}>
            <Text style={styles.getAppointmentText}>
              {LanguageSelected.addMember[languageKey]}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AddMember;
