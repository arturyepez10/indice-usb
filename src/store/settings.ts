import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  mode: PaletteMode;
  periodModalOpen: boolean;
}

const initialState: SettingsState = {
  mode: 'light',
  periodModalOpen: false
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.mode = action.payload;
    },
    setPeriodModalOpen: (state, action: PayloadAction<boolean>) => {
      state.periodModalOpen = action.payload;
    }
  }
});

export const { setMode, setPeriodModalOpen } = settingsSlice.actions;

export default settingsSlice.reducer;