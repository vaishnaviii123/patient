export interface AppointmentDetailInterface {
  navigation: any;
  route: {
    params: {
      selectedType: string;
      selectedMode: string;
      date: string;
      time: string;
      selectedPerson: string;
      fees:string;
    };
  };
}
