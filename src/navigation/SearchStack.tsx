import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchDoctor from '../screens/SearchDoctor/SearchDoctor';
import ClinicDetail from '../screens/ClinicDetail/ClinicDetail';
import DoctorDetail from '../screens/DoctorDetail/DoctorDetail';
import GetAppointment from '../screens/GetAppointment/GetAppointment';
import QuestionScreen from '../screens/QuestionScreen/QuestionScreen';
import AppointmentDetail from '../screens/AppointmentDetail/AppointmentDetail';
import AddMember from '../screens/AddMember/AddMember';
const Stack = createStackNavigator();

const SearchStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchDoctor"
        component={SearchDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ClinicDetail"
        component={ClinicDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorDetail"
        component={DoctorDetail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="GetAppointment"
        component={GetAppointment}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="QuestionScreen"
        component={QuestionScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AppointmentDetail"
        component={AppointmentDetail}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AddMember"
        component={AddMember}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
