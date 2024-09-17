import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import {
  setMode,
  setPeriodModalOpen,
  setEditPeriod,
  setCookiesState,
  setForceOpen
} from "../store/settings";
import {
  AcademicPeriodData,
  setNewPeriod,
  deletePeriod,
  updatePeriod,
  updatPeriodAccumulatedGrade
} from "../store/academics";

export const useReduxStore = () => {
  const settings = useSelector((state: RootState) => state.settings);
  const academics = useSelector((state: RootState) => state.academics);
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    dispatch(setMode(settings.mode === 'dark' ? 'light' : 'dark'));
  };

  const togglePeriodModal = (modalState?: boolean) => {
    const value = modalState || !settings.periodModalOpen;
    dispatch(setPeriodModalOpen(value));
  };

  const addAcademicPeriod = (period_data: AcademicPeriodData, index?: number) => {
    const isEdition = settings.editPeriod.status;

    if (!isEdition) {
      dispatch(setNewPeriod(period_data));
    } 
    
    if (isEdition && index !== undefined) {
      dispatch(updatePeriod({ index, period: period_data }));
    }
  };

  const deleteAcademicPeriod = (index: number) => {
    dispatch(deletePeriod(index));
  };

  const editAcademicPeriod = (index: number) => {
    dispatch(setEditPeriod(index));  
  }

  const updateAccumulatedGrade = (period: number, value: number) => {
    dispatch(updatPeriodAccumulatedGrade({ period, value }));
  };

  const updateCookiesSettings = (value: boolean) => {
    dispatch(setCookiesState(value));
  };

  const forceCookiesModal = (value: boolean) => {
    dispatch(setForceOpen(value));
  }

  return {
    state: { settings, academics },
    dispatch,
    toggleColorMode,
    togglePeriodModal,
    addAcademicPeriod,
    deleteAcademicPeriod,
    editAcademicPeriod,
    updateAccumulatedGrade,
    updateCookiesSettings,
    forceCookiesModal
  };
};
