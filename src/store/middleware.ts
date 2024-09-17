import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setCookiesState } from "./settings";
import {
  setNewPeriod,
  deletePeriod,
  updatePeriod,
  updatPeriodAccumulatedGrade
} from "./academics";
import { RootState } from ".";

export const cookiesSettingsListener = createListenerMiddleware();
cookiesSettingsListener.startListening({
  actionCreator: setCookiesState,
  effect: (action) => {
    localStorage.setItem('cookies_accepted', `${action.payload}`);

    if (!action.payload) {
      localStorage.removeItem('state_data');
    }
  }
})

export const academicDataListener = createListenerMiddleware();
cookiesSettingsListener.startListening({
  matcher: isAnyOf(setNewPeriod, deletePeriod, updatePeriod, updatPeriodAccumulatedGrade),
  effect: (_, api) => {
    const state = api.getState() as RootState;

    if (state.settings.cookies.accepted) {
      localStorage.setItem('state_data', JSON.stringify(state.academics.periods));
    }
  }
});