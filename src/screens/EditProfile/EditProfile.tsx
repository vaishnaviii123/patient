import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import {IMAGES} from '../../assets';
import styles from './EditProfileStyle';
import {EditProfileInterface} from './EditProfileInterface';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';

const EditProfile: React.FC<EditProfileInterface> = ({navigation}) => {
  const [username, setUsername] = useState('Isha Khare');
  const [password, setPassword] = useState('Text@123');
  const [gender, setGender] = useState('Female');
  const [email, setEmail] = useState('isha@mailinator.com');
  const [contact, setContact] = useState('+91-7611161040');
  const [dob, setDob] = useState('10 November 2002');

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
            <Text style={styles.headerTxt}>Edit</Text>
            <Text />
          </View>

          <View style={styles.Container}>
            <View style={styles.imageview}>
              <Image
                source={IMAGES.userProfile}
                style={styles.img}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity style={styles.cameraView}>
              <Image source={IMAGES.cameraIcon} style={styles.camera} />
            </TouchableOpacity>
            <Text style={styles.header1}>Basic Details</Text>

            <Text style={styles.subHead}>Full Name</Text>
            <View style={styles.subContainer}>
              <TextInput
                placeholder="Enter user name"
                placeholderTextColor="black"
                style={styles.txt}
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <Text style={styles.subHead}>Password</Text>
            <View style={styles.subContainer}>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor="black"
                style={styles.txt}
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <Text style={styles.subHead}>Gender</Text>
            <View style={styles.subContainer}>
              <TextInput
                placeholder="Enter gender"
                placeholderTextColor="black"
                style={styles.txt}
                value={gender}
                onChangeText={setGender}
              />
            </View>

            <Text style={styles.subHead}>Date Of Birth</Text>
            <View style={[styles.subContainer, styles.dobContainer]}>
              <View>
                <TextInput
                  placeholder="Enter date of birth"
                  placeholderTextColor="black"
                  style={styles.txt}
                  value={dob}
                  onChangeText={setDob}
                />
              </View>
              <TouchableOpacity>
                <Image
                  source={IMAGES.calendarIcon}
                  style={styles.calendarIcon}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.header1}>Contact Details</Text>

            <Text style={styles.subHead}>Mobile Number</Text>
            <View style={styles.subContainer}>
              <TextInput
                placeholder="Enter mobile number"
                placeholderTextColor="black"
                style={styles.txt}
                value={contact}
                onChangeText={setContact}
              />
            </View>

            <Text style={styles.subHead}>Email Address</Text>
            <View style={styles.subContainer}>
              <TextInput
                placeholder="Enter email address"
                placeholderTextColor="black"
                style={styles.txt}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.fixedButtonContainer}>
              <TouchableOpacity style={styles.fixedButton}>
                <Text style={styles.getAppointmentText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default EditProfile;
