import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AcademicPeriodData {
  name: string;
  year: number | null;
  courses: {
    code: string;
    name: string;
    credits: number | null;
    grade: number | "R" | null;
    has_effect: boolean;
    removed: boolean;
  }[];
  accumulated_grade: number;
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
    },
    deletePeriod(state, action: PayloadAction<number>) {
      state.periods.splice(action.payload, 1);
    },
    updatePeriod(state, action: PayloadAction<{ index: number, period: AcademicPeriodData }>) {
      state.periods[action.payload.index] = action.payload.period;
    },
    updatPeriodAccumulatedGrade(state, action: PayloadAction<{ period: number, value: number }>) {
      const { period, value } = action.payload;
      state.periods[period].accumulated_grade = value;
    }
  }
});

export const { setNewPeriod, deletePeriod, updatePeriod, updatPeriodAccumulatedGrade } = academicsSlice.actions;

export default academicsSlice.reducer;
