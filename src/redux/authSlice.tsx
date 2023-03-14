import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';


export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload
    },
  },
});

export const { setUserLogin } = authSlice.actions;
export default authSlice.reducer
//export const { selectCurrentUser } = (state: RootState) => state.auth.user;