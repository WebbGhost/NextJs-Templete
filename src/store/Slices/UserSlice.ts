/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export interface UserStateType {
  status: string;
  error: string;
  user: {
    id: string;
    name: string;
    age: number;
    picture?: string;
    token?: string;
    status?: string;
  };
}

const initialState: UserStateType = {
  status: 'success',
  error: '',
  user: {
    id: '1',
    name: 'John Doe',
    age: 25,
    picture: '',
    token: '',
    status: 'success',
  },
};

export const userSlice: any = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state): void => {
      state.status = '';
      state.error = '';
      state.user = {
        id: '',
        name: '',
        age: 0,
        picture: '',
        token: '',
        status: '',
      };
    },
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
