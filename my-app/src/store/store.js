import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../slices/metricDeetsSlice';

const store = configureStore({
  reducer: {
    metrics: metricsReducer,
  },
});

export default store;
