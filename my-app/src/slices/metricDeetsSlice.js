import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async () => {
  try {
    const response = await axios.get('https://emojihub.yurace.pro/api/all');
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const initialState = {
  categories: [],
  isLoading: false,
  error: null,
};

const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export default metricsSlice.reducer;
