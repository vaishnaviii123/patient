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
import styles from './QuestionScreenStyle';
import LanguageSelected from '../../utils/LanguageSelected';
import AuthStore from '../../zustand/store/AuthStore';
import {QuestionScreenInterface} from './QuestionScreenInterface';
import * as Progress from 'react-native-progress';

const questions = [
  {
    id: 1,
    text: 'Which of the below is a psychological disorder of refusal to eat food, caused by undernutrition?',
    options: ['Strongly satisfied', 'Satisfied', 'Neutral', 'Not satisfied'],
  },
  {
    id: 2,
    text: 'How would you rate your experience with our service?',
    options: ['Excellent', 'Good', 'Average', 'Poor'],
  },
  {
    id: 3,
    text: 'Which of the below is a psychological disorder of refusal to eat food, caused by undernutrition?',
    options: ['Strongly satisfied', 'Satisfied', 'Neutral', 'Not satisfied'],
  },
  {
    id: 4,
    text: 'How would you rate your experience with our service?',
    options: ['Excellent', 'Good', 'Average', 'Poor'],
  },
  {
    id: 5,
    text: 'Which of the below is a psychological disorder of refusal to eat food, caused by undernutrition?',
    options: ['Strongly satisfied', 'Satisfied', 'Neutral', 'Not satisfied'],
  },
  {
    id: 6,
    text: 'How would you rate your experience with our service?',
    options: ['Excellent', 'Good', 'Average', 'Poor'],
  },
];

const TOTAL_QUESTIONS = questions.length;

const QuestionScreen: React.FC<QuestionScreenInterface> = ({
  navigation,
  route,
}) => {
  const {fees} = route?.params;
  const {language} = AuthStore();
  const languageKey = language as keyof typeof LanguageSelected.Medicine;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState<any>({});

  const progress = Object.keys(answers).length / TOTAL_QUESTIONS;

  const handleOptionSelect = (option: any) => {
    setSelectedOption(option);
    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [currentQuestion]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] || null);
    } else {
      navigation.navigate('GetAppointment', {answers, fees});
    }
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
              {LanguageSelected.bookAnAppoinment[languageKey]}
            </Text>
            <Text />
          </View>

          <View style={styles.questionContainer}>
            <Progress.Circle
              size={30}
              progress={progress}
              showsText={false}
              thickness={3}
              color={progress === 0 ? '#FFFFFF3D' : '#FFFFFF'}
              unfilledColor="#FFFFFF3D"
              borderWidth={0}
            />

            <Text style={styles.questionText}>
              {LanguageSelected.question[languageKey]} {currentQuestion + 1}
            </Text>
          </View>

          <Text style={styles.question}>{questions[currentQuestion].text}</Text>
          <View style={styles.Container}>
            <Text style={styles.optionHead}>
              {' '}
              {LanguageSelected.options[languageKey]}
            </Text>
            <View>
              {questions[currentQuestion].options.map((item: any, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.option,
                    selectedOption === item && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect(item)}>
                  <Text
                    style={[
                      styles.radioText,
                      selectedOption === item && styles.selectedRadioText,
                    ]}>
                    {selectedOption === item ? (
                      <Image
                        source={IMAGES.selectIcon}
                        style={styles.optionIcon}
                      />
                    ) : (
                      <Image
                        source={IMAGES.deselectIcon}
                        style={styles.optionIcon}
                      />
                    )}
                  </Text>
                  <Text
                    style={[
                      styles.optionText,
                      selectedOption === item && styles.selectedOptionText,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  if (currentQuestion === 0) {
                    navigation.goBack();
                  } else {
                    setCurrentQuestion(prev => {
                      const prevQuestion = prev - 1;
                      setSelectedOption(answers[prevQuestion] || null);
                      return prevQuestion;
                    });
                  }
                }}>
                <Text style={styles.backText}>
                  {LanguageSelected.back[languageKey]}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Text style={styles.nextText}>
                  {LanguageSelected.next[languageKey]}
                </Text>
                <Image source={IMAGES.nextArrow} style={styles.nextArrow} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default QuestionScreen;
