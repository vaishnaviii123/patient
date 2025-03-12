import api from "./api";
interface VerifyOtpData {
  mobileNumber: string;
  otp: string;
}
// API: Get User by ID

// API: Create User
export const SignUpPatient = async (userData: object) => {
  try {
    const response = await api.post('/user/patient/patientProfileRegister', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};
export const sentOtp = async (mobileNo: string) => {
  try {
    const response = await api.post(`/user/patient/sendMobileOtp?mobileNo=${mobileNo}`);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};


export const verifyOtp = async (data: VerifyOtpData) => {
  try {
    const response = await api.post(`/user/patient/verifyOtp?mobileNumber=${data.mobileNumber}&otp=${data.otp}`);
    return response.data;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

// API: Update User


export default api;
