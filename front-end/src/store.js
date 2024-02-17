import { configureStore } from "@reduxjs/toolkit";
import coinReducer from '../src/redux/coinSlice';

const store = configureStore({
  reducer: {
    coin: coinReducer,
  },
});
export default store;