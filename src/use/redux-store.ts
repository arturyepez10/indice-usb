import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store";
import { setMode, setPeriodModalOpen, setEditPeriod } from "../store/settings";
import { AcademicPeriodData, setNewPeriod, deletePeriod, updatePeriod } from "../store/academics";

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

  const addAcademicPeriod = (period_data: AcademicPeriodData, index?: number) => {
    const isEdition = state.settings.editPeriod.status;

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

  return {
    state,
    dispatch,
    toggleColorMode,
    togglePeriodModal,
    addAcademicPeriod,
    deleteAcademicPeriod,
    editAcademicPeriod
  };
};
