import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen/FirstScreen';
import SecondScreen from '../screens/SecondScreen/SecondScreen';
import SignIn from '../screens/Login/SignIn';
import Login from '../screens/Login/Login';
import Signup from '../screens/SignUp/Signup';
import MobileVerification from '../screens/OtpVerification/MobileVerification';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import Language from '../screens/Language/Language';
import BottomTab from './BottomTab';
import AuthStore from '../zustand/store/AuthStore';
import DrawerNavigation from './DrawerNavigation';
// const Token=false
const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  const {Token} = AuthStore();
  return (
    <Stack.Navigator>
      {Token == null ? (
        <>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SecondScreen"
            component={SecondScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Language"
            component={Language}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MobileVerification"
            component={MobileVerification}
            options={{headerShown: false}}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="HomeScreen"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
