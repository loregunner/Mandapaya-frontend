/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosHttp from "@/config/axios";
import { ILogin, IuserPayload } from "@/utils/interfaces";

export const userAuthentication =
  ({ t, username, password }: ILogin) =>
  (): any => {
    return axiosHttp.post<ILogin>(process.env.URL_LOGIN as string, {
      t,
      username,
      password,
    });
  };

export const userRegister =
  ({
    t,
    email,
    password,
    name,
    lastname,
    phone,
    address,
    idnumber,
    identification_type,
    person_type,
    city,
    state,
    zipcode,
    treatment,
  }: IuserPayload) =>
  (): any => {
    return axiosHttp.post<IuserPayload>(process.env.URL_LOGIN as string, {
      t,
      email,
      password,
      name,
      lastname,
      phone,
      address,
      idnumber,
      identification_type,
      person_type,
      city,
      state,
      zipcode,
      treatment,
    });
  };

export const userEmail =
  ({ t, username }: any) =>
  (): any => {
    return axiosHttp.post<any>(process.env.URL_LOGIN as string, {
      t,
      username,
    });
  };

export const userToken =
  ({ t, userid, token }: any) =>
  (): any => {
    return axiosHttp.post<any>(process.env.URL_LOGIN as string, {
      t,
      userid,
      token,
    });
  };

export const userPassword =
  ({ t, userid, password }: any) =>
  (): any => {
    return axiosHttp.post<any>(process.env.URL_LOGIN as string, {
      t,
      userid,
      password,
    });
  };
