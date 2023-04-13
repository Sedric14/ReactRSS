import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../feauters/formSlice';
import saveSearchReducer from '../feauters/saveSearchSlice';
import { combineReducers } from 'redux';
import { apiSlice } from '../feauters/apiSlice';
const rootReducer = combineReducers({ formCards: formReducer, saveSearch: saveSearchReducer });
export type IRootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: {
    formCards: formReducer,
    saveSearch: saveSearchReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
