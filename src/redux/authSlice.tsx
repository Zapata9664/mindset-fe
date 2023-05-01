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
    setDay: (state, action) => {      
      state.day = action.payload
    },
    setMonth: (state, action) => {      
      state.month = action.payload
    },
    setYear: (state, action) => {      
      state.year = action.payload
    },
    setHourState: (state, action) => {
      state.hour = action.payload
      
    },
  },
});

export const { setUserLogin, setToken, setDay, setMonth, setYear, setHourState } = authSlice.actions;
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user;