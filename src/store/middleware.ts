import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setCookiesState } from "./settings";

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