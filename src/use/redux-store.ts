import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setMode } from "../store/settings";

export const useReduxStore = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const toggleColorMode = () => {
    dispatch(setMode(state.settings.mode === 'dark' ? 'light' : 'dark'));
  };

  return { state, dispatch, toggleColorMode };
};
