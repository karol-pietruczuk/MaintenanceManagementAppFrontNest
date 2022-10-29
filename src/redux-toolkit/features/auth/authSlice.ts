import { createSlice } from '@reduxjs/toolkit';
import {UserRole, AuthLoginResponse, AuthRefreshResponse} from 'types';
import { RootState } from "../../store";

const initialState: AuthLoginResponse | AuthRefreshResponse = {
  jwt: '',
  user: {
    name: '',
    surname: '',
    id: '',
    roles: UserRole.Production,
  }
};

export interface SetAuthData {
  payload: AuthLoginResponse | AuthRefreshResponse;
}

interface ClearAuthData {}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action: SetAuthData) => {
      state.jwt = action.payload.jwt;
      state.user = action.payload.user;
    },

    clearAuthData: (state, action: ClearAuthData) => {
      state.jwt = initialState.jwt;
      state.user = initialState.user;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;