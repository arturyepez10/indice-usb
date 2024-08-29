
import { Dialog } from './dialog';

import { useReduxStore } from '../../use/redux-store';
import PeriodForm from './form';

export const FormDialog = () => {
  const {
    state: { settings: { periodModalOpen, editPeriod } },
    togglePeriodModal
  } = useReduxStore();

  return (
    <Dialog
      buttonTitle="Agregar Trimestre"
      modalTitle={
        editPeriod.status
          ? "Editar Trimestre"
          : "Agregar Trimestre"
      }
      openModal={periodModalOpen}
      toggleModalOpen={togglePeriodModal}
    >
      <PeriodForm />
    </Dialog>
  )
}

export default FormDialog;