import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  mode: PaletteMode;
}

const initialState: SettingsState = {
  mode: 'light'
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    }
  }
});

export const { setMode } = settingsSlice.actions;

export default settingsSlice.reducer;