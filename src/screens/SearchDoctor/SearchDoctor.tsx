import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import {IMAGES} from '../../assets';
import styles from './SearchDoctorStyle';
import {SearchDoctorInterface} from './SearchDoctorInterface';
import AuthStore from '../../zustand/store/AuthStore';
import LanguageSelected from '../../utils/LanguageSelected';
const SearchDoctor: React.FC<SearchDoctorInterface> = props => {
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;
  const [selectedCategory, setSelectedCategory] = useState('Doctor');

  const categories = [
    {key: 'Doctor', label: 'Doctor', icon: IMAGES.doctorIcon},
    {key: 'Clinic', label: 'Clinic', icon: IMAGES.clinicIcon},
    {
      key: 'Specialization',
      label: 'Specialization',
      icon: IMAGES.specializationIcon,
    },
  ];
  const doctors = [
    {
      id: '1',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. John Doe',
      specializations: ['Dermatologist', 'Cosmetologist'],
      fees: '$100',
      status: 'Online',
      rating: 2.0,
    },
    {
      id: '2',
      image: require('../../assets/images/doctorimage2.png'),
      name: 'Dr. Jane Smith',
      specializations: ['Cardiologist', 'General Physician', 'Cosmetologist'],
      fees: '$120',
      status: 'Online',
      rating: 4.0,
    },
    {
      id: '3',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. Janeson',
      specializations: ['Dermatologist', 'Cosmetologist', 'General Physician'],
      fees: '$120',
      status: 'Offline',
      rating: 5.0,
    },
    {
      id: '4',
      image: require('../../assets/images/doctorimage1.png'),
      name: 'Dr. Janeson',
      specializations: ['Dermatologist', 'Cosmetologist', 'General Physician'],
      fees: '$120',
      status: 'Offline',
      rating: 3.0,
    },
    // Add more doctor objects as needed
  ];
  const renderCategoryItem = ({
    item,
  }: {
    item: {
      icon: ImageSourcePropType | undefined;
      key: string;
      label: string;
    };
  }) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        selectedCategory === item.key && styles.selectedCategoryItem,
      ]}
      onPress={() => setSelectedCategory(item.key)}>
      <Image
        resizeMode="contain"
        source={item.icon}
        style={styles.categoryIcon}
      />

      <Text style={styles.categoryText}>{item.label}</Text>
    </TouchableOpacity>
  );
  const renderDoctorItem = ({
    item,
  }: {
    item: {
      rating: number;
      status: string;
      id: string;
      image: ImageSourcePropType;
      name: string;
      specializations: string[];
      fees: string;
    };
  }) => (
    <View style={styles.doctorCard}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('DoctorDetail')}>
        <View style={styles.doctorInfo}>
          <Image source={item.image} style={styles.doctorImage} />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Image
                resizeMode="contain"
                source={IMAGES.StarIcon}
                style={styles.starIcon}
              />
              <Text style={styles.ratingText}>{item.rating}</Text>
              <Text style={styles.ratingText}> (400 reviwer)</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.specializations.map((specialization, index) => (
          <View key={index} style={styles.specializationContainer}>
            <Text style={styles.doctorSpecialization}>{specialization}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.separator} />
      {selectedCategory === 'Doctor' && (
        <View style={styles.doctorFeesContainer}>
          <View style={styles.feesContainer}>
            <Text style={styles.doctorfeesText}>Fees</Text>
            <Text style={styles.doctorFees}>{item.fees}</Text>
          </View>
          <TouchableOpacity
            style={styles.bookNowButton}
            onPress={() =>
              props.navigation.navigate('QuestionScreen', {fees: 50.9})
            }>
            <Text style={styles.bookNowButtonText}>Book Now</Text>
            <Image
              resizeMode="contain"
              source={IMAGES.blueArrow}
              style={styles.bookIcon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
  const renderList = () => {
    switch (selectedCategory) {
      case 'Doctor':
        return (
          <FlatList
            data={doctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ); // Replace with your Doctor list component
      case 'Clinic':
        return (
          <FlatList
            data={doctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ); // Replace with your Clinic list component
      case 'Specialization':
        return (
          <FlatList
            data={doctors}
            renderItem={renderDoctorItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        ); // Replace with your Specialization list component
      default:
        return null;
    }
  };

  return (
    <ImageBackground source={IMAGES.bg} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.header}>
            <Image
              resizeMode="contain"
              style={styles.backArrow}
              source={IMAGES.whitebackArrow}
            />
            <Text style={styles.search}>
              {LanguageSelected.search[languageKey]}
            </Text>
            <View />
          </View>
          <View style={styles.searchBarContainer}>
            <Image source={IMAGES.searchIcon} style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder={LanguageSelected.search[languageKey]}
            />
            <Image source={IMAGES.filterIcon} style={styles.filterIcon} />
          </View>
        </View>
        <View style={styles.mainView}>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={item => item.key}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          <View style={styles.listContainer}>{renderList()}</View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SearchDoctor;
