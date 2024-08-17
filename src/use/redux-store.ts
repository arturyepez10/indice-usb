import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { setMode, setPeriodModalOpen } from "../store/settings";
import { AcademicPeriodData, setNewPeriod } from "../store/academics";

export const useReduxStore = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    dispatch(setMode(state.settings.mode === 'dark' ? 'light' : 'dark'));
  };

  const togglePeriodModal = (modalState?: boolean) => {
    const value = modalState || !state.settings.periodModalOpen;
    dispatch(setPeriodModalOpen(value));
  };

  const addAcademicPeriod = (period_data: AcademicPeriodData) => {
    dispatch(setNewPeriod(period_data));
  }

  return { state, dispatch, toggleColorMode, togglePeriodModal, addAcademicPeriod };
};
