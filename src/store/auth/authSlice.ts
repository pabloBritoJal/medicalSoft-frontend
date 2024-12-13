import { createSlice } from "@reduxjs/toolkit";

export interface authState {
  status: "checking" | "not-authenticated" | "authenticated";
  uid: number | null;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  token: string | null;
  errorMessage: string | null;
}

const initialState: authState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  token: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
      state.token = payload.token;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
