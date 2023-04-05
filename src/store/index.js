import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countReducer from "../reducers/countSlice";
import copySlice from "../reducers/copySlice";

const allReducers = combineReducers({countReducer, copySlice});

export default configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV !== "production",
});
