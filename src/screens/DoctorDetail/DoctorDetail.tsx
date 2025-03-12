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
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {DoctorDetailInterface} from './DoctorDetailInterface';
import styles from './DoctorDetailStyle';

const users = [
  {
    id: 1,
    name: 'Nabila Reyna',
    lastActive: '30 min ago',
    rating: 4.5,
    profileImage: IMAGES.userProfile1,
  },
  {
    id: 2,
    name: 'Farry Johan A',
    lastActive: '10 min ago',
    rating: 4.2,
    profileImage: IMAGES.userProfile1,
  },
];

const DoctorDetail: React.FC<DoctorDetailInterface> = props => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const renderUsersRating = ({item}: {item: any}) => (
    <View>
      <View style={styles.card}>
        <View style={styles.leftDetails}>
          <Image
            source={item.profileImage}
            style={styles.profileImg}
            resizeMode="contain"
          />
          <View>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userActive}>{item.lastActive}</Text>
          </View>
        </View>
        <View style={styles.rightDetails}>
          <Image source={IMAGES.starCutIcon} style={styles.starIcon} />
          <Text style={styles.starRating}>{item.rating}</Text>
        </View>
      </View>
      <View style={styles.line} />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ImageBackground resizeMode="cover" source={IMAGES.bg}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image source={IMAGES.backIcon} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.headerTxt}>
              {LanguageSelected.doctorDetail[languageKey]}
            </Text>
            <Text />
          </View>
          <ImageBackground
            source={IMAGES.docImg}
            style={styles.docImg}
            resizeMode="contain">
            <View style={styles.midContainer}>
              <View style={styles.leftContainer} />
              <View style={styles.rightContainer}>
                <View style={styles.rating}>
                  <Image
                    source={IMAGES.whiteStarIcon}
                    style={styles.ratingIcon}
                    resizeMode="contain"
                  />
                  <Text style={styles.ratingTxt}>4.8</Text>
                </View>
                <Text style={styles.docName}>Sarah Jhonon</Text>
                <View style={styles.docSpec}>
                  <Text style={styles.docSpecTxt}>Dentist</Text>
                </View>
              </View>
            </View>
            <ImageBackground
              source={IMAGES.docBg}
              style={styles.docBg}
              resizeMode="contain">
              <View style={styles.subContainer1}>
                <View style={styles.left}>
                  <Text style={styles.feesHead}>
                    {LanguageSelected.fees[languageKey]}
                  </Text>
                  <Text style={styles.feesTxt}>$50.9</Text>
                </View>
                <View style={styles.right}>
                  <View style={styles.mode}>
                    <Text style={styles.modeTxt}>
                      {LanguageSelected.online[languageKey]}
                    </Text>
                  </View>
                  <View style={styles.mode}>
                    <Text style={styles.modeTxt}>
                      {LanguageSelected.offline[languageKey]}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.subContainer2}>
                <View style={styles.items}>
                  <Image source={IMAGES.clockIcon} style={styles.icons} />
                  <View>
                    <Text style={styles.txt}>8 Years</Text>
                    <Text style={styles.head}>
                      {LanguageSelected.experience[languageKey]}
                    </Text>
                  </View>
                </View>
                <View style={styles.items}>
                  <Image source={IMAGES.peopleIcon} style={styles.icons} />
                  <View>
                    <Text style={styles.txt}>3.5k +</Text>
                    <Text style={styles.head}>
                      {LanguageSelected.patients[languageKey]}
                    </Text>
                  </View>
                </View>
                <View style={styles.items}>
                  <Image source={IMAGES.emptyStarIcon} style={styles.icons} />
                  <View>
                    <Text style={styles.txt}>2.8k +</Text>
                    <Text style={styles.head}>
                      {LanguageSelected.reviews[languageKey]}
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </ImageBackground>
          <View style={styles.Container}>
            <View style={styles.aboutContainer}>
              <Text style={styles.aboutHead}>
                {LanguageSelected.aboutMe[languageKey]}
              </Text>
              <Text style={styles.aboutTxt}>
                Dr. Safira Baloga, a dedicated cardiologist, brings a wealth of
                experience to Golden Gate Cardiology Center in Golden Gate, CA.
                <TouchableOpacity>
                  <Text style={styles.viewTxt}>
                    {LanguageSelected.viewMore[languageKey]}
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.locationHead}>
                {LanguageSelected.locations[languageKey]}
              </Text>
              <View style={styles.addressContainer}>
                <Image
                  source={IMAGES.locationIcon}
                  style={styles.addressIcon}
                />
                <Text style={styles.addressTxt}>
                  1233 Central Ave, Lake Station, Indiana
                </Text>
              </View>
              <View style={styles.addressContainer}>
                <Image
                  source={IMAGES.locationIcon}
                  style={styles.addressIcon}
                />
                <Text style={styles.addressTxt}>
                  Central Ave, Lake Station, 464...
                </Text>
              </View>
            </View>
            <View style={styles.languageContainer}>
              <Text style={styles.languageHead}>
                {LanguageSelected.languages[languageKey]}
              </Text>
              <Text style={styles.languageTxt}>English, Hindi</Text>
            </View>
            <View style={styles.r2Container}>
              <View style={styles.r2Head}>
                <Text style={styles.r2HeadTxt}>
                  {LanguageSelected.reviewsAndRatings[languageKey]}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.r2HeadBtn}>
                    {LanguageSelected.viewAll[languageKey]}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
              <View style={styles.ratingContainer}>
                <View style={styles.leftRating}>
                  <Text style={styles.leftTxt}>4.5/5.0</Text>
                </View>
                <View style={styles.rightRating}>
                  <View style={styles.starContainer}>
                    <Image source={IMAGES.starCutIcon} style={styles.star} />
                    <Image source={IMAGES.starCutIcon} style={styles.star} />
                    <Image source={IMAGES.starCutIcon} style={styles.star} />
                    <Image source={IMAGES.starCutIcon} style={styles.star} />
                    <Image source={IMAGES.starFadeIcon} style={styles.star} />
                  </View>
                  <Text style={styles.rightTxt}>
                    1250+ {LanguageSelected.reviews[languageKey]}
                  </Text>
                </View>
              </View>
              <View style={styles.line} />
              {users.map(item => (
                <View key={item.id}>{renderUsersRating({item})}</View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.fixedButtonContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('QuestionScreen')}>
            <View style={styles.innerContainer}>
              <View style={styles.rightArrowContainer}>
                <Image source={IMAGES.rightArrow} style={styles.rightArrow} />
              </View>
              <Text style={styles.bookNowText}>
                {LanguageSelected.bookNow[languageKey]}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default DoctorDetail;
