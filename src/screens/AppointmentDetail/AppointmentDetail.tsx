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
// import styles from './GetAppointmentStyle';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {AppointmentDetailInterface} from './AppointmentDetailInterface';

import styles from './AppointmentDetailStyle';
const AppointmentDetail: React.FC<AppointmentDetailInterface> = ({
  navigation,
  route,
}) => {
  const {selectedType, selectedMode, date, time, selectedPerson, fees} =
    route.params;
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
              {LanguageSelected.appointmentDetail[languageKey]}
            </Text>
            <Text />
          </View>

          <View style={styles.Container}>
            <Text style={styles.head}>
              {LanguageSelected.appointmentDetails[languageKey]}
            </Text>
            <View style={styles.docContainer}>
              <Image
                source={IMAGES.docPro}
                style={styles.docProfile}
                resizeMode="contain"
              />
              <View style={styles.docDetails}>
                <Text style={styles.docName}>Dr. Safira Baloga</Text>
                <Text style={styles.docSpec}>Ophthalmology, dermatology</Text>
              </View>
            </View>

            <View style={styles.detailsContainer}>
              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.subTxt}>{selectedPerson}</Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.appointmentFor[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.selfEmptyIcon} style={styles.Icon} />
              </View>

              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.subTxt}>{date} Jan 2025</Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.appointmentDate[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.blueCalendarIcon} style={styles.Icon} />
              </View>

              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.subTxt}>{time} PM</Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.appointmentTime[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.clockEmptyIcon} style={styles.Icon} />
              </View>

              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.subTxt}>
                    {selectedType}, {selectedMode}
                  </Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.appointmentTypeAndMode[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.videoEmptyIcon} style={styles.Icon} />
              </View>

              <View style={styles.subContainer}>
                <View>
                  <Text style={styles.amtTxt}>${fees}</Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.fees[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.feesIcon} style={styles.Icon} />
              </View>

              <View style={[styles.subContainer, styles.lastSubContainer]}>
                <View>
                  <Text style={styles.amtTxt}>$60.0</Text>
                  <Text style={styles.subHead}>
                    {LanguageSelected.amountPayable[languageKey]}
                  </Text>
                </View>
                <Image source={IMAGES.walletIcon} style={styles.Icon} resizeMode='contain'/>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <TouchableOpacity
            // onPress={() => navigation.navigate('AppointmentDetail')}
            style={styles.fixedButton}>
            <Text style={styles.paymentText}>
              {LanguageSelected.proceedPayment[languageKey]}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AppointmentDetail;
