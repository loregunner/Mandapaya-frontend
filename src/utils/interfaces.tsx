export interface ILogin {
  t: number
  username: string;
  password: string;
}

export interface IuserPayload {
  t: number;
  email: string;
  password: string;
  name: string;
  lastname: string;
  phone: string;
  address: string;
  idnumber: string;
  identification_type: number;
  person_type: string;
  city: string;
  state: string;
  zipcode: string;
  treatment: string;
}
