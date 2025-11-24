
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import headerReducer from '../Components/Common/Header/headerSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    header: headerReducer,
  },
});

export default store;
