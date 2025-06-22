/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { AppState } from "@/redux";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: {
    user_id: "",
    user_email: "",
    user_phone: "",
    user_photo: "",
    user_name: "",
    user_lastname: "",
    user_address: "",
    user_idnumber: "",
    user_identification_type: 0,
    user_identification_type_str: "",
    user_person_type: "",
    user_person_type_str: "",
    user_city: "",
    user_state: "",
    user_zipcode: "",
    user_treatment: "",
  },
  token: "",
} as any;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction) => {
      {
        state.data = action.payload;
      }
    },
  },
});

export const { setLogin } = loginSlice.actions;

export const selectLoginState = (state: AppState) => state.login.data;
export default loginSlice.reducer;
