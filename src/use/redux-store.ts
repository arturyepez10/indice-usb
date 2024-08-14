import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMode, setPeriodModalOpen } from "../store/settings";

export const useReduxStore = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    dispatch(setMode(state.settings.mode === 'dark' ? 'light' : 'dark'));
  };

  const togglePeriodModal = (modalState?: boolean) => {
    dispatch(setPeriodModalOpen(modalState || !state.settings.periodModalOpen));
  };

  return { state, dispatch, toggleColorMode, togglePeriodModal };
};
