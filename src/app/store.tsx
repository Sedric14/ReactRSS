import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../feauters/formSlice';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({ formCards: formReducer });
export type IRootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: {
    formCards: formReducer,
  },
});
