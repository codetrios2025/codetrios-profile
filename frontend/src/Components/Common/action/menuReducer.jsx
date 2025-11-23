import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import constants from '../../../services/constants';
// Thunk to fetch menu data
export const fetchMenu = createAsyncThunk(
  'menu/fetchMenu',
  async (menuLocation, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${constants.API_BASE_URL}header`, {
        params: { location: menuLocation },
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data.headers; // Adjust based on actual response structure
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menu: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default menuSlice.reducer;
