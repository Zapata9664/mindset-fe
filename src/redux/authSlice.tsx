import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null, day: null, month: null, year: null, hour: null },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setDate: (state, { payload }) => {
      state.day = payload.day
      state.month = payload.month
      state.year = payload.year

    },
    setHourState: (state, action) => {
      state.hour = action.payload

    },
  },
});

export const { setUserLogin, setToken, setDate, setHourState } = authSlice.actions;
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user;