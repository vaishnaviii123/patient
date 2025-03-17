import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  sentOtp,
  verifyOtp,
  SignUpPatient,
  login,
  forgotPassword,
} from '../api/AuthApiServices';
import {ToastMsg} from '../../Component/ToastMsg';

// User State Interface
interface UserState {
  language: string;
  user: any | null; // Store user data
  loading: boolean; // Loading state
  error: string | null; // Error message
  signUpData: any;
  LoginPetientData: any;
  Token: string | null;

  sentNumberOtp: (data: any) => void;
  clearUser: () => void;
  addlanguage: (data: string) => void;
  AddSignUpData: (data: any) => void;
  verifyNumberOtp: (data: VerifyOtpData) => void;
  LoginPetient: (data: any) => void;
  forgotPasswordPetient: (data: any) => void;
}

interface VerifyOtpData {
  mobileNumber: string;
  otp: string;
  navigation: any;
}

// Zustand Store with API Logic
const AuthStore = create<UserState>()(
  persist(
    devtools((set, get) => ({
      loading: false,
      error: null,
      language: 'EN',
      signUpData: null,
      LoginPetientData: null,
      Token: null,

      // Send OTP
      sentNumberOtp: async (data: any) => {
        set({loading: true, error: null});
        try {
          const userData = await sentOtp(data);
          set({loading: false});
          if (userData) {
            ToastMsg(userData.message, 'bottom');
          }
        } catch (error) {
          set({error: 'Failed to send OTP', loading: false});
        }
      },

      // Login Patient
      LoginPetient: async (data: any) => {
        set({loading: true, error: null});
        try {
          const userData = await login(data);
          if (userData) {
            set({
              loading: false,
              LoginPetientData: userData.data,
              Token: userData.data.token,
            });
            ToastMsg('Login Successful', 'bottom');
          } else {
            ToastMsg('Invalid Credentials', 'bottom');
          }
        } catch (error) {
          set({error: 'Failed to login', loading: false});
        }
      },
      forgotPasswordPetient: async (data: any) => {
        set({loading: true, error: null});
        const forgotData = {
          email: data.email,
          userType: 'Patient',
        };
       
        try {
          const userData = await forgotPassword(forgotData);
          if (userData?.status == 200) {
            set({loading: false});
            data.navigation.navigate('SignIn');
            ToastMsg(userData.message, 'bottom');
          } else {
            ToastMsg('Invalid Credentials', 'bottom');
          }
        } catch (error) {
          set({error: 'Failed to login', loading: false});
        }
      },

      // Verify OTP and Register
      verifyNumberOtp: async (Data: VerifyOtpData) => {
        set({loading: true, error: null});
        try {
          const userData = await verifyOtp(Data);
          if (userData.status == 200) {
            const state = get();
            const userData = await SignUpPatient(state.signUpData);
            set({loading: false});
            if (userData.status == 200) {
              Data.navigation.navigate('SignIn');
              ToastMsg(userData.message, 'bottom');
            } else {
              Data.navigation.navigate('Signup');
            }
          }
        } catch (error) {
          set({error: 'Failed to verify OTP', loading: false});
        }
      },

      // Store Signup Data
      AddSignUpData: (data: any) => {
        set({signUpData: data});
      },

      // Update Language
      addlanguage: (data: string) => {
        set({language: data});
      },

      // Clear User Data (Logout)
      clearUser: () =>
        set({
          user: null,
          Token: null,
          LoginPetientData: null,
        }),
    })),
    {
      name: 'auth-storage', // AsyncStorage key
      storage: {
        getItem: async name => {
          const item = await AsyncStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async name => {
          await AsyncStorage.removeItem(name);
        },
      }, // Use AsyncStorage for persistence
    },
  ),
);

export default AuthStore;
