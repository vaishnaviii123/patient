import React, {useState} from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  StyleSheet,
  TextStyle,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../utils/Constants';
import {
  radiusScale,
  verticalMarginScale,
  verticalScale,
} from '../utils/DimensionConstant';
import { IMAGES } from '../assets';

interface CustomTextInputProps extends TextInputProps {
  icon?: ImageSourcePropType[]; // Accepts an image for the icon
  Righticon?: ImageSourcePropType[]; // Accepts an image for the icon
  inputStyle?: TextStyle;
  containerStyle?: any; // Custom styling for the TextInput
  onRightIconPress?: () => void;
  eyeicon:any
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  icon,
  inputStyle,
  containerStyle,
  Righticon,
  onRightIconPress,
  eyeicon,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [icon1, setIcon1] = useState(icon ? icon[1] : undefined);
  const [icon0, setIcon0] = useState(icon ? icon[0] : undefined);
  const [show, setShow] = useState(eyeicon?true:false);
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {borderBottomColor: isFocused ? Colors.lightblue : Colors.borderColor},
        {borderRightColor: isFocused ? Colors.lightblue : Colors.borderColor},
        {borderLeftColor: isFocused ? Colors.lightblue : Colors.borderColor},
        {borderTopColor: isFocused ? Colors.lightblue : Colors.borderColor},
        {borderBottomWidth: isFocused ? 1 : 1.5},
        {borderTopWidth: isFocused ? 1 : 0.1},
      ]}>
      {icon && (
        <Image source={isFocused ? icon[0] : icon[1]} style={styles.icon} />
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={Colors.grey}
        secureTextEntry={show}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {Righticon && (
           <TouchableOpacity onPress={onRightIconPress}>
           <Image source={isFocused ? Righticon[0] : Righticon[1]} style={styles.icon} />
         </TouchableOpacity>
        //  <Image source={isFocused ? Righticon[0] : Righticon[1]} style={styles.icon} />
      )}
      {eyeicon && (
           <TouchableOpacity onPress={()=>setShow(!show)}>
           <Image source={show ? IMAGES.eyeOpen : IMAGES.eyeClose} style={styles.icon} />
         </TouchableOpacity>
        //  <Image source={isFocused ? Righticon[0] : Righticon[1]} style={styles.icon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: radiusScale(15),
    paddingHorizontal: verticalScale(12),
    paddingVertical: verticalScale(10),
    borderBottomColor: Colors.red,
    backgroundColor: Colors.white,
    // marginVertical: verticalMarginScale(5),
  },
  icon: {
    width: verticalScale(20),
    height: verticalScale(20),
    marginRight: 8,
    resizeMode: 'contain',
  },
  icon1: {
    width: verticalScale(35),
    height: verticalScale(35),
    marginRight: 8,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingVertical:verticalScale(10)
  },
});

export default CustomTextInput;