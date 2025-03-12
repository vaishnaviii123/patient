import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {sentOtp, verifyOtp, SignUpPatient} from '../api/AuthApiServices';
import {ToastMsg} from '../../Component/ToastMsg';
// User State Interface
interface UserState {
  language: string;
  user: any | null; // Store user data
  loading: boolean; // Loading state
  error: string | null;
  signUpData: any; // Error message

  sentNumberOtp: (mobileNo: string) => void; // Function to fetch user by ID
  clearUser: () => void;
  addlanguage: (data: string) => void; // Clear user data
  AddSignUpData: (data: any) => void; // Clear user data
  verifyNumberOtp: (data: VerifyOtpData) => void;

}

interface VerifyOtpData {
  mobileNumber: string;
  otp: string;
}

// Zustand Store with API Logic
const AuthStore = create<UserState>()(
  devtools(
    (set, get) => ({
      loading: false,
      error: null,
      language: 'EN',
      signUpData: null,

      // Fetch User by ID
      sentNumberOtp: async (mobileNo: string) => {
        set({loading: true, error: null});
        try {
          const userData = await sentOtp(mobileNo);
          set({loading: false});
          if (userData) {
            ToastMsg(userData.message, 'bottom');
          }
        } catch (error) {
          set({error: 'Failed to fetch user', loading: false});
        }
      },
      verifyNumberOtp: async (Data: VerifyOtpData, navigation: any) => {
        set({loading: true, error: null});
        try {
          const userData = await verifyOtp(Data);
          if (userData.status == 200) {
            const state = get();
            const userData = await SignUpPatient(state.signUpData);
            set({loading: false});
            if (userData.status == 200) {
              navigation.navigate('SignIn');
            } else {
              navigation.navigate('Signup');
            }
          }
        } catch (error) {
          set({error: 'Failed to fetch user', loading: false});
        }
      },

      AddSignUpData: async (data: any) => {
        set({signUpData: data});
      },
      // Create User
      addlanguage: async (data: string) => {
        set({language: data});
      },

      // Clear User
      clearUser: () => set({user: null}),
    }),
    {name: 'UserStore'},
  ),
);

export default AuthStore;
