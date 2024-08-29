import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SettingsState {
  mode: PaletteMode;
  periodModalOpen: boolean;
  editPeriod: {
    status: boolean;
    index: number | null;
  };
}

const initialState: SettingsState = {
  mode: 'light',
  periodModalOpen: false,
  editPeriod: {
    status: false,
    index: null
  }
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
      if (!action.payload) state.editPeriod = { status: false, index: null };
    },
    setEditPeriod: (state, action: PayloadAction<number>) => {
      state.periodModalOpen = true
      state.editPeriod = { status: true, index: action.payload };
    }
  }
});

export const { setMode, setPeriodModalOpen, setEditPeriod } = settingsSlice.actions;

export default settingsSlice.reducer;