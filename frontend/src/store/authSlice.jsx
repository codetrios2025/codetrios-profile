import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticatedTq: false,
  user: null,
  token: null,
};

let finalDataState = JSON.parse(localStorage.getItem('authData')) || initialState;

const authSlice = createSlice({
  name: 'auth',
  initialState : finalDataState,
  reducers: {
    userlogin: (state, action) => {
      state.isAuthenticatedTq = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem('authData', JSON.stringify(state));
    },
    userlogout: (state) => {
      state.isAuthenticatedTq = false;
      state.user = null;
      state.token = null;
       // Remove state from local storage
       localStorage.removeItem('authData');
    },
  },
});

export const { userlogin, userlogout } = authSlice.actions;
export default authSlice.reducer;

  
