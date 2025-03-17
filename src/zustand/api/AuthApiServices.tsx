import api from './api';

interface VerifyOtpData {
  mobileNumber: string;
  otp: string;
}
// API: Get User by ID

// API: Create User
export const SignUpPatient = async (userData: object) => {
  try {
    const response = await api.post(
      '/patient/patientProfileRegister',
      userData,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
export const login = async (userData: object) => {
  try {
    const response = await api.post('/authController/login', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
export const forgotPassword = async (userData: object) => {
  try {
    const response = await api.post('/authController/forgotPassword', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
export const sentOtp = async (data: any) => {
  try {
    const response = await api.post(
      `/patient/sendMobileOtp?mobileNo=${data.mobileNo}&status=${data.status}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export const verifyOtp = async (data: VerifyOtpData) => {
  try {
    const response = await api.post(
      `/patient/verifyOtp?mobileNumber=${data.mobileNumber}&otp=${data.otp}`,
    );
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// API: Update User

export default api;
