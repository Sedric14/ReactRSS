import { createSlice } from '@reduxjs/toolkit';
import { IRootState } from '../app/store';

const saveSlice = createSlice({
  name: 'saveSearch',
  initialState: { value: 'nature' },
  reducers: {
    saveValue: (state, action) => {
      return { ...state, value: action.payload };
    },
  },
});

export const { saveValue } = saveSlice.actions;
export const SelectSave = (state: IRootState) => state.saveSearch;

export default saveSlice.reducer;
