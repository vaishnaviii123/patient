import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../utils/Constants';
import {fontScale} from '../utils/DimensionConstant';
import AuthStore from '../zustand/store/AuthStore';
import LanguageSelected from '../utils/LanguageSelected';
interface CountdownTimerProps {
  initialTime?: number;
  onStart?: () => void;
  onFinish?: () => void;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  initialTime = 60,
  onStart,
  onFinish,
}) => {
  const {language} = AuthStore();
  const languageKey =
  language as keyof typeof LanguageSelected.Medicine;
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [resendVisible, setResendVisible] = useState<boolean>(false);

  useEffect(() => {
    if (onStart) onStart(); // Notify parent when timer starts
    setResendVisible(false);
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setResendVisible(true);
          if (onFinish) onFinish(); // Notify parent when timer finishes
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [initialTime, onStart, onFinish]);

  return (
    <View style={styles.container}>
     
      <Text style={styles.timerText}>{timeLeft} sec</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timerText: {
    fontSize: 16,
    color: Colors.fontColor,
    fontFamily: Fonts.Light,
  },
  resendText: {
    fontSize: fontScale(16),
    color: Colors.lightblue,
    fontFamily: Fonts.Bold,
    marginRight: 10,
  },
});

export default CountdownTimer;
