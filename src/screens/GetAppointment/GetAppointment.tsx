import React, {useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Modal,
  Alert,
} from 'react-native';
import {IMAGES} from '../../assets';
import styles from './GetAppointmentStyle';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {GetAppointmentInterface} from './GetAppointmentInterface';
import {FlatList} from 'react-native-gesture-handler';
import {horizontalScale} from '../../utils/DimensionConstant';
import DocumentPicker from 'react-native-document-picker';
import {PermissionsAndroid, Platform} from 'react-native';

const dateList = [
  {
    id: 1,
    day: 'Wed',
    date: 10,
  },
  {
    id: 2,
    day: 'Thu',
    date: 11,
  },
  {
    id: 3,
    day: 'Fri',
    date: 12,
  },
  {
    id: 4,
    day: 'Sat',
    date: 13,
  },
  {
    id: 5,
    day: 'Sun',
    date: 14,
  },
  {
    id: 6,
    day: 'Mon',
    date: 15,
  },
];

const dayTimeList = [
  {
    id: 1,
    time: '10:00',
  },
  {
    id: 2,
    time: '10:30',
  },
  {
    id: 3,
    time: '11:00',
  },
  {
    id: 4,
    time: '11:30',
  },
  {
    id: 5,
    time: '12:00',
  },
  {
    id: 6,
    time: '12:30',
  },
  {
    id: 7,
    time: '1:00',
  },
  {
    id: 8,
    time: '1:30',
  },
];

const getTimePeriod = (time: any) => {
  const hour = parseInt(time.split(':')[0], 10);
  return hour < 12 ? 'morning' : 'afternoon';
};

const GetAppointment: React.FC<GetAppointmentInterface> = ({
  navigation,
  route,
}) => {
  const {fees} = route.params;
  const [uploadModalVisible, setUploadModalVisible] = useState(false);
  const [familyModalVisible, setFamilyModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedType, setSelectedType] = useState('Online');
  const [selectedMode, setSelectedMode] = useState('Video');
  const [selectedLocation, setSelectedLocation] = useState(1);
  const [date, setDate] = useState(1);
  const [time, setTime] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState('Self');
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        if (Platform.Version >= 33) {
          // Android 13+ (API 33 and above)
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          // Android 12 and below
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to upload files.',
              buttonPositive: 'OK',
            },
          );
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        }
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const pickFile = async () => {
    const permissionGranted = await requestPermission();
    if (!permissionGranted) {
      Alert.alert(
        'Permission Denied',
        'Storage access is required to upload files.',
      );
      return;
    }

    try {
      const res: any = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      });
      console.log('Selected File:', res);
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled document picker');
      } else {
        console.log('Unknown Error: ', err);
      }
    }
  };

  const handleFamily = () => {
    setFamilyModalVisible(true);
    setSelectedPerson('Family');
  };

  return (
    <View style={styles.mainContainer}>
      <ImageBackground resizeMode="cover" source={IMAGES.bg}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={IMAGES.backIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>
              {LanguageSelected.getAppointment[languageKey]}
            </Text>
            <Text />
          </View>

          <View style={styles.Container}>
            <View style={styles.docContainer}>
              <Image
                source={IMAGES.docPro}
                style={styles.docProfile}
                resizeMode="contain"
              />
              <View style={styles.docDetails}>
                <Text style={styles.docName}>Dr. Safira Baloga</Text>
                <Text style={styles.docSpec}>Ophthalmology, dermatology</Text>
                <View style={styles.docRating}>
                  <Image
                    source={IMAGES.StarIcon}
                    style={styles.starIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.ratingTxt}>4.9 </Text>
                  <Text style={styles.ratingTxt}>(400 reviewer)</Text>
                </View>
              </View>
            </View>
            <View style={styles.line} />

            <Text style={styles.head}>
              {LanguageSelected.selectAppointmentType[languageKey]}
            </Text>
            <View style={styles.subContainer}>
              <TouchableOpacity onPress={() => setSelectedType('Online')}>
                <View
                  style={[
                    styles.tab,
                    selectedType === 'Online' && styles.selectedTab,
                  ]}>
                  <Image
                    source={IMAGES.onlineDoc}
                    style={styles.typeIcon}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.tabTxt,
                      selectedType === 'Online' && styles.selectedTabTxt,
                    ]}>
                    {LanguageSelected.online[languageKey]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedType('Clinic')}>
                <View
                  style={[
                    styles.tab,
                    selectedType === 'Clinic' && styles.selectedTab,
                  ]}>
                  <Image
                    source={IMAGES.clinic}
                    style={styles.typeIcon}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.tabTxt,
                      selectedType === 'Clinic' && styles.selectedTabTxt,
                    ]}>
                    {LanguageSelected.clinic[languageKey]}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            {selectedType === 'Online' ? (
              <View>
                <Text style={[styles.head, styles.head1]}>
                  {LanguageSelected.selectAppointmentMode[languageKey]}
                </Text>
                <View style={[styles.subContainer]}>
                  <TouchableOpacity onPress={() => setSelectedMode('Video')}>
                    <View
                      style={[
                        styles.modeTab,
                        selectedMode === 'Video' && styles.selectedMode,
                      ]}>
                      <Image
                        source={IMAGES.videoIcon}
                        style={styles.modeIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.modeTxt,
                          selectedMode === 'Video' && styles.selectedModeTxt,
                        ]}>
                        {LanguageSelected.video[languageKey]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelectedMode('Voice')}>
                    <View
                      style={[
                        styles.modeTab,
                        selectedMode === 'Voice' && styles.selectedMode,
                      ]}>
                      <Image
                        source={IMAGES.telephoneIcon}
                        style={styles.modeIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.modeTxt,
                          selectedMode === 'Voice' && styles.selectedModeTxt,
                        ]}>
                        {LanguageSelected.voice[languageKey]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelectedMode('Chat')}>
                    <View
                      style={[
                        styles.modeTab,
                        selectedMode === 'Chat' && styles.selectedMode,
                      ]}>
                      <Image
                        source={IMAGES.chatIcon}
                        style={styles.modeIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.modeTxt,
                          selectedMode === 'Chat' && styles.selectedModeTxt,
                        ]}>
                        {LanguageSelected.chat[languageKey]}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View>
                <Text style={[styles.head, styles.head1]}>Select Location</Text>
                <View>
                  <TouchableOpacity onPress={() => setSelectedLocation(1)}>
                    <View
                      style={[
                        styles.locationTab,
                        selectedLocation === 1 && styles.selectedLocation,
                      ]}>
                      <Image
                        source={
                          selectedLocation === 1
                            ? IMAGES.selectIcon
                            : IMAGES.deselectIcon
                        }
                        style={styles.locationIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.LocationTxt,
                          selectedLocation === 1 && styles.selectedLocationTxt,
                        ]}>
                        4308 W Cayuga St, Tampa, (813) 870-0709
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelectedLocation(2)}>
                    <View
                      style={[
                        styles.locationTab,
                        selectedLocation === 2 && styles.selectedLocation,
                      ]}>
                      <Image
                        source={
                          selectedLocation === 2
                            ? IMAGES.selectIcon
                            : IMAGES.deselectIcon
                        }
                        style={styles.locationIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.LocationTxt,
                          selectedLocation === 2 && styles.selectedLocationTxt,
                        ]}>
                        149 Warwick Rd, Kenilworth, 0845 373 0966{' '}
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setSelectedLocation(3)}>
                    <View
                      style={[
                        styles.locationTab,
                        selectedLocation === 3 && styles.selectedLocation,
                      ]}>
                      <Image
                        source={
                          selectedLocation === 3
                            ? IMAGES.selectIcon
                            : IMAGES.deselectIcon
                        }
                        style={styles.locationIcon}
                        resizeMode="contain"
                      />
                      <Text
                        style={[
                          styles.LocationTxt,
                          selectedLocation === 3 && styles.selectedLocationTxt,
                        ]}>
                        Overbergstrasse 4, Bochum, 44801{' '}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            <Text style={styles.head}>
              {LanguageSelected.selectDateAndTime[languageKey]}
            </Text>
            <FlatList
              horizontal={true}
              data={dateList}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => setDate(item.id)}>
                  <View
                    style={[
                      styles.dateTab,
                      ((item.day === 'Sat' || item.day === 'Sun') &&
                        styles.disableDateTab) ||
                        (date === item.id && styles.selectedDateTab),
                    ]}>
                    <Text
                      style={[
                        styles.dayText,
                        ((item.day === 'Sat' || item.day === 'Sun') &&
                          styles.disableDayText) ||
                          (date === item.id && styles.selectedDayText),
                      ]}>
                      {item.day}
                    </Text>
                    <Text
                      style={[
                        styles.dateText,
                        ((item.day === 'Sat' || item.day === 'Sun') &&
                          styles.disableDateText) ||
                          (date === item.id && styles.selectedDateText),
                      ]}>
                      {item.date}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <Text style={styles.subHead}>
              {LanguageSelected.morningSet[languageKey]}
            </Text>
            <FlatList
              horizontal={true}
              data={dayTimeList.filter(
                item => getTimePeriod(item.time) === 'morning',
              )}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => setTime(item.id)}>
                  <View
                    style={[
                      styles.timeTab,
                      (item.time === '12:00' && styles.disableDateTab) ||
                        (time === item.id && styles.selectedDateTab),
                    ]}>
                    <Text
                      style={[
                        styles.timeTxt,
                        (item.time === '12:00' && styles.disableDateText) ||
                          (time === item.id && styles.selectedDateText),
                      ]}>
                      {item.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />

            <Text style={styles.subHead}>
              {LanguageSelected.afternoonSet[languageKey]}
            </Text>
            <FlatList
              horizontal={true}
              data={dayTimeList.filter(
                item => getTimePeriod(item.time) === 'afternoon',
              )}
              renderItem={({item}) => (
                <TouchableOpacity onPress={() => setTime(item.id)}>
                  <View
                    style={[
                      styles.timeTab,
                      (item.time === '12:00' && styles.disableDateTab) ||
                        (time === item.id && styles.selectedDateTab),
                    ]}>
                    <Text
                      style={[
                        styles.timeTxt,
                        (item.time === '12:00' && styles.disableDateText) ||
                          (time === item.id && styles.selectedDateText),
                      ]}>
                      {item.time}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <Text style={styles.head}>
              {LanguageSelected.bookingAppointmentFor[languageKey]}
            </Text>
            <View style={styles.subContainer}>
              <TouchableOpacity onPress={() => setSelectedPerson('Self')}>
                <View
                  style={[
                    styles.tab,
                    selectedPerson === 'Self' && styles.selectedTab,
                  ]}>
                  <Image
                    source={IMAGES.selfIcon}
                    style={styles.typeIcon}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.tabTxt,
                      selectedPerson === 'Self' && styles.selectedTabTxt,
                    ]}>
                    {LanguageSelected.self[languageKey]}
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFamily}>
                <View
                  style={[
                    styles.tab,
                    selectedPerson === 'Family' && styles.selectedTab,
                  ]}>
                  <Image
                    source={IMAGES.familyIcon}
                    style={styles.typeIcon}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.tabTxt,
                      selectedPerson === 'Family' && styles.selectedTabTxt,
                    ]}>
                    {LanguageSelected.family[languageKey]}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.uploadContainer}>
              <Text style={styles.questionTxt}>
                {LanguageSelected.doYouWantTo[languageKey]}{' '}
              </Text>
              <TouchableOpacity onPress={() => setUploadModalVisible(true)}>
                <Text style={styles.linkTxt}>
                  {LanguageSelected.uploadPrescriptionQ[languageKey]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AppointmentDetail', {
                selectedType,
                selectedMode,
                selectedPerson,
                time,
                date,
                fees,
              })
            }
            style={styles.fixedButton}>
            <Text style={styles.getAppointmentText}>
              {LanguageSelected.getAppointment[languageKey]}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Modal
        visible={uploadModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setUploadModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity onPress={() => setUploadModalVisible(false)}>
            <Image
              source={IMAGES.crossIcon}
              style={styles.crossIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={[styles.Container, {width: horizontalScale(385)}]}>
            <Text style={styles.uploadHead}>
              {LanguageSelected.uploadPrescription[languageKey]}
            </Text>
            <TouchableOpacity onPress={pickFile} style={styles.subContainer1}>
              {selectedFile ? (
                <Text>{selectedFile?.name}</Text>
              ) : (
                <>
                  <Image source={IMAGES.uploadIcon} style={styles.uploadIcon} />
                  <Text style={styles.uploadTxt}>
                    {LanguageSelected.uploadPrescription[languageKey]}
                  </Text>
                </>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadBtn}
              onPress={
                selectedFile !== null
                  ? () => Alert.alert('Uploaded Successfully')
                  : () => Alert.alert('No File Selected')
              }>
              <Text style={styles.uploadText}>
                {LanguageSelected.upload[languageKey]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={familyModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setFamilyModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity onPress={() => setFamilyModalVisible(false)}>
            <Image
              source={IMAGES.crossIcon}
              style={styles.crossIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={[styles.Container, {width: horizontalScale(385)}]}>
            <Text style={styles.uploadHead}>{LanguageSelected.selectMember[languageKey]}</Text>
            <View style={styles.subContainer2}>
              <Image
                source={IMAGES.memberProfile}
                style={styles.memberProfile}
                resizeMode="contain"
              />
              <View style={styles.detailsContainer}>
                <Text style={styles.memberName}>Sandeep Sharma</Text>
                <Text style={styles.info}>29, Male</Text>
                <View style={styles.dataContainer}>
                  <Image
                    source={IMAGES.blueTelephoneIcon}
                    style={styles.Icon}
                    resizeMode="contain"
                  />
                  <Text style={styles.info}>9926441129</Text>
                </View>
                <View style={styles.dataContainer}>
                  <Image source={IMAGES.blueLocationIcon} style={styles.Icon} />
                  <Text style={styles.info}>149 Warwick Rd, Kenilworth</Text>
                </View>
              </View>
              <Image
                source={IMAGES.pencilIcon}
                style={styles.pencilIcon}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('AddMember')}>
              <View style={styles.bottomContainer}>
                <Image
                  source={IMAGES.addMemberIcon}
                  style={styles.addMemberIcon}
                  resizeMode="contain"
                />
                <Text style={styles.addMemberTxt}>{LanguageSelected.addNewMember[languageKey]}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GetAppointment;
