import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null, date: '', hour: null },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload
    },
    setToken: (state, action) => {
      state.token = action.payload
    },
    setDate: (state, action) => {
      console.log(action);
      
      state.date = action.payload
    },
    setHourState: (state, action) => {
      state.hour = action.payload
      console.log(action);
      
    },
  },
});

export const { setUserLogin, setToken, setDate, setHourState } = authSlice.actions;
export default authSlice.reducer
export const selectCurrentUser = (state: RootState) => state.auth.user;