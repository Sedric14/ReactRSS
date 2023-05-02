import { createSlice } from '@reduxjs/toolkit';
import { FormFields } from '../app/interfaces';

const initialState: FormFields[] = [];

const formSlice = createSlice({
  name: 'formCard',
  initialState,
  reducers: {
    cardAdded(state, action) {
      state.push(action.payload.data);
    },
  },
});

export const { cardAdded } = formSlice.actions;

export default formSlice.reducer;
