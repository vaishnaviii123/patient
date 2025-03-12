
export const validateSpace = /^\S*$/; // a string consisting only of non-whitespaces

export const validateName = (name: string) => {
  const re = /^([\sa-zA-Z\u0900-\u097F]+)$/;
  return re.test(name);
};

export const validateNumber = (number: string) => {
  const re = /^([4-9]\d{9})*$/;
  return re.test(number);
};

export const valdiatePin = (text: string) => {
  const re = /^([1-9]\d{5}|[1-9]\d{3}\\s\d{3})*$/;
  return re.test(text);
};

export const validateEmail = (email: any) => {
  const re = /^(([^<>()[\]\\.,;:!\s@"]+(\.[^<>()[\]\\.,;:!\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password: string) => {
  const re = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[.@#$%^&+=]).*$/;
  return re.test(password);
};



export const arrayValidator = (productItems: string | any[]) => {
  let isArray =
    productItems && Array.isArray(productItems) && productItems.length > 0;
  return isArray;

};
