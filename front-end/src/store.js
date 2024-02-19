import { configureStore } from "@reduxjs/toolkit";
import missionsReducer from "../src/redux/completeMission";

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;