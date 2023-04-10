import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null, date: '', hour: Number },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setDate: (state, action) => {
      state.date = action.payload
    },
    setHourState: (state, action) => {
      state.hour = action.payload

    }
  },
});

export const { setUserLogin, setToken, setDate, setHourState } = authSlice.actions;
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user;