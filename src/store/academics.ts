import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AcademicPeriodData {
  name: string;
  year: number | null;
  courses: {
    code: string;
    name: string;
    credits: number | null;
    grade: number | null;
    has_effect: boolean;
    removed: boolean;
  }[];
}

export interface AcademicsState {
  periods: AcademicPeriodData[];
}

const initialState: AcademicsState = {
  periods: [],
};

export const academicsSlice = createSlice({
  name: 'academics',
  initialState,
  reducers: {
    setNewPeriod(state, action: PayloadAction<AcademicPeriodData>) {
      state.periods.push(action.payload);
    }
  }
});

export const { setNewPeriod } = academicsSlice.actions;

export default academicsSlice.reducer;
