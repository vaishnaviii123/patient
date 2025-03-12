import React from 'react';
import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import {IMAGES} from '../../assets';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {ClinicDetailInterface} from './ClinicDetailInterface';
import styles from './ClinicDetailStyle';

const doctorsList = [
  {
    id: 1,
    name: 'Dr. Stone Gaze',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 4.5,
    image: IMAGES.clinicDoc1,
  },
  {
    id: 2,
    name: 'Dr. Wahyu',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 4.5,
    image: IMAGES.clinicDoc2,
  },
  {
    id: 3,
    name: 'Dr. Reza Razor',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 4.5,
    image: IMAGES.clinicDoc3,
  },
  {
    id: 4,
    name: 'Dr. Jacky Cun',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 2.5,
    image: IMAGES.clinicDoc4,
  },
  {
    id: 5,
    name: 'Dr. Reza Razor',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 4.5,
    image: IMAGES.clinicDoc5,
  },
  {
    id: 6,
    name: 'Dr. Wahyu',
    specialty: 'Ear, Nose & Throat specialist',
    price: '$120.000',
    rating: 3.5,
    image: IMAGES.clinicDoc1,
  },
];

const ClinicDetail: React.FC<ClinicDetailInterface> = () => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const renderDoctorsList = ({item}: {item: any}) => (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <Image source={item.image} style={styles.docProfile} />
        <View>
          <Text style={styles.docName}>{item.name}</Text>
          <Text style={styles.docSpec}>{item.specialty}</Text>
          <Text style={styles.docPrice}>{item.price}</Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Image source={IMAGES.ratingIcon} style={styles.docRatingIcon} />
        <Text style={styles.docRating}>{item.rating}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Image resizeMode="cover" source={IMAGES.clinicBg2} style={styles.bg2} />
      <ScrollView>
        <View style={styles.header}>
          <Image source={IMAGES.clinicBg1} style={styles.bg1} />
          <TouchableOpacity>
            <Image source={IMAGES.backIcon} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTxt}>
            {LanguageSelected.clinicDetail[languageKey]}
          </Text>
          <Text />
        </View>
        <View style={styles.Container}>
          <Text style={styles.clinicName}>Apple Hospital</Text>
          <Text style={styles.clinicLocation}>
            1233 Central Ave, Lake Station, Indiana
          </Text>

          <View style={styles.subContainer1}>
            <View style={styles.itemContainer}>
              <View style={styles.items}>
                <Image source={IMAGES.verifyIcon} style={styles.icons} />
                <Text style={styles.itemContent}>Verify</Text>
              </View>
              <View>
                <Text style={styles.itemHead}>
                  {' '}
                  {LanguageSelected.certified[languageKey]}
                </Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.items}>
                <Image source={IMAGES.briefcaseIcon} style={styles.icons} />
                <Text style={styles.itemContent}>5 Years</Text>
              </View>
              <View>
                <Text style={styles.itemHead}>
                  {' '}
                  {LanguageSelected.experience[languageKey]}
                </Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.items}>
                <Image source={IMAGES.starCutIcon} style={styles.icons} />
                <Text style={styles.itemContent}>4.5</Text>
              </View>
              <View>
                <Text style={styles.itemHead}>
                  {' '}
                  {LanguageSelected.rating[languageKey]}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.subContainer2}>
            <View style={styles.top}>
              <Text style={styles.topTxt}>
                {' '}
                {LanguageSelected.aboutClinic[languageKey]}
              </Text>
              <Image source={IMAGES.topArrowIcon} style={styles.topIcon} />
            </View>

            <Text style={styles.aboutTxt}>
              Dr. Safira Baloga, a dedicated cardiologist, brings a wealth of
              experience to Golden Gate Cardiology Center in Golden Gate, CA.
              <TouchableOpacity>
                <Text style={styles.viewTxt}>View More</Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.subContainer2}>
            <Text style={styles.topTxt}>
              {LanguageSelected.address[languageKey]}
            </Text>
            <View style={styles.addressContainer}>
              <Image source={IMAGES.locationIcon} style={styles.addressIcon} />
              <Text style={styles.addressTxt}>
                1233 Central Ave, Lake Station, Indiana
              </Text>
            </View>
          </View>
          <View style={styles.subContainer2}>
            <Text style={styles.topTxt}>
              {' '}
              {LanguageSelected.clinicDoctor[languageKey]}
            </Text>
            {doctorsList.map(item => (
              <View key={item.id}>{renderDoctorsList({item})}</View>
            ))}
            {/* <FlatList
              data={doctorsList}
              renderItem={renderDoctorsList}
              nestedScrollEnabled={true}
            /> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ClinicDetail;
