import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import LanguageSelected from '../../utils/LanguageSelected';
import {HomeScreenInterface} from './HomeScreenInterface';
import {IMAGES} from '../../assets';
import {Fonts} from '../../utils/Constants';
import AuthStore from '../../zustand/store/AuthStore';
import styles from './HomeScreenStyle';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.75; // 75% of screen width for card
const SPACING = 15;
const HomeScreen: React.FC<HomeScreenInterface> = ({navigation}) => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const upcomingAppointments = [
    {
      id: 1,
      date: '7 October 2021',
      time: '08:00 AM - 10:00 AM',
      doctor: 'Dr. Matias',
      specialization: 'Psychiatrist',
      // profileImage: "https://example.com/dr-matias.jpg",
    },
    {
      id: 2,
      date: '10 October 2021',
      time: '10:30 AM - 12:00 PM',
      doctor: 'Dr. Smith',
      specialization: 'Cardiologist',
      // profileImage: "https://example.com/dr-smith.jpg",
    },
    {
      id: 3,
      date: '15 October 2021',
      time: '02:00 PM - 03:30 PM',
      doctor: 'Dr. Williams',
      specialization: 'Neurologist',
      // profileImage: "https://example.com/dr-williams.jpg",
    },
  ];

  const renderUpcomingAppointments = ({item}: {item: any}) => (
    <TouchableOpacity
      style={styles.eventContainer}
      onPress={() => navigation.navigate('Appointment')}>
      <ImageBackground source={IMAGES.vector} resizeMode="cover">
        <View style={styles.top}>
          <Text style={styles.topText}>
            {LanguageSelected.appointment[languageKey]}
          </Text>
          <Image source={IMAGES.arrowRight} style={styles.topArrow} />
        </View>
        <View style={styles.mid}>
          <View style={styles.midLeft}>
            <View style={styles.midSub}>
              <Image source={IMAGES.calendarTick} style={styles.midImg} />
              <Text style={styles.midText}>{item.date}</Text>
            </View>
            <View style={styles.midSub}>
              <Image source={IMAGES.clock} style={styles.midImg} />
              <Text style={styles.midText}>{item.time}</Text>
            </View>
          </View>
          <View style={styles.midRight}>
            <Image
              source={IMAGES.send}
              style={styles.midRightImg}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.bottom}>
          <Image source={IMAGES.DoctorProfile} style={styles.docImg} />
          <View style={styles.docInfo}>
            <Text style={styles.docName}>{item.doctor}</Text>
            <Text style={styles.docSpec}>{item.specialization}</Text>
          </View>
          <Image source={IMAGES.messageTxt} style={styles.docMsg} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.leftView}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('DrawerNavigation')}
              onPress={() => navigation.openDrawer()}
              >
              <Image
                source={IMAGES.profile}
                style={styles.leftImg}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rightView}>
            <Image source={IMAGES.wallet} style={styles.rightImg} />

            <Image source={IMAGES.bell} style={styles.rightImg} />

            <View style={styles.dropdown}>
              <Image source={IMAGES.flag} style={styles.dropdownImg} />
              {/* <Image source={IMAGES.dropdown} style={styles.rightImg} /> */}
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>
            {LanguageSelected.health[languageKey]}
          </Text>
        </View>
        <View style={styles.calendar}>
          <Image source={IMAGES.calendar} style={styles.calImg} />
          <Text style={styles.calText}>
            {LanguageSelected.date[languageKey]}
          </Text>
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.eventHead}>
            {LanguageSelected.upcomingAppointments[languageKey]}
          </Text>
          <TouchableOpacity>
            <Text style={styles.eventText}>
              {LanguageSelected.viewAll[languageKey]}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH + SPACING}
            snapToAlignment="start"
            decelerationRate="fast"
            contentContainerStyle={{paddingHorizontal: SPACING}}
            data={upcomingAppointments}
            // keyExtractor={item => item.id}
            renderItem={renderUpcomingAppointments}
          />
        </View>
        <View style={styles.subHeading}>
          <Text style={styles.eventHead}>
            {LanguageSelected.specialization[languageKey]}
          </Text>
          <TouchableOpacity>
            <Text style={styles.eventText}>
              {LanguageSelected.viewAll[languageKey]}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.speContainer}>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.heart}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.heart[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.brain}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.brain[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.lungs}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.lungs[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.lungs}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.dentist[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.largeImgContainer}>
                <ImageBackground
                  source={IMAGES.tablet}
                  style={styles.largeImg}
                  resizeMode="contain">
                  <View style={styles.largeImgText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.general[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View style={styles.subContainer}>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.kidney}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.kidney[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={styles.container}>
                <ImageBackground
                  source={IMAGES.ear}
                  style={styles.specImg}
                  resizeMode="contain">
                  <View style={styles.specText}>
                    <Text style={{fontFamily: Fonts.SemiBold}}>
                      {LanguageSelected.ear[languageKey]}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default HomeScreen;
