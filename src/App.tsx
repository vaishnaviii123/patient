import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import SplashScreen from 'react-native-splash-screen';
import CustomStatusBar from './Component/CustomStatusBar';
import { SafeAreaView } from 'react-native';
import { Colors } from './utils/Constants';
const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.lightblue }}>

        <CustomStatusBar />
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
