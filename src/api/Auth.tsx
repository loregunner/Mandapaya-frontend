/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosHttp from "@/config/axios";
import { ILogin, IuserPayload } from "@/utils/interfaces";

export const userAuthentication =
  ({ email, password }: ILogin) =>
  (): any => {
    return axiosHttp.post<ILogin>(process.env.URL_LOGIN as string, {
      email,
      password,
    });
  };

export const userRegister = (data: IuserPayload) => (): any => {
  return axiosHttp.post<IuserPayload>(process.env.URL_LOGIN as string, {
    data,
  });
};
