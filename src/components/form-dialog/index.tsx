
import { Dialog } from './dialog';

import { useReduxStore } from '../../use/redux-store';
import PeriodForm from './form';

export const FormDialog = () => {
  const {
    state: { settings: { periodModalOpen } },
    togglePeriodModal
  } = useReduxStore();

  return (
    <Dialog
      buttonTitle="Agregar Trimestre"
      modalTitle="Agregar Trimestre"
      openModal={periodModalOpen}
      toggleModalOpen={togglePeriodModal}
    >
      <PeriodForm />
    </Dialog>
  )
}

export default FormDialog;