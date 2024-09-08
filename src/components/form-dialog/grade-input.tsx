/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useWatch, FieldArrayWithId, useFormContext } from 'react-hook-form';

import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from "@mui/material";

import { AcademicPeriodData } from '../../store/academics';
import { useReduxStore } from '../../use/redux-store';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

interface GradeInputProps {
  field: FieldArrayWithId<AcademicPeriodData, "courses", "id">;
  index: number;
}

export const GradeInput = ({
  field,
  index
}: GradeInputProps) => {
  const {
    state: {
      settings: { editPeriod: { status: isEdition } }
    }
  } = useReduxStore();
  const {
    control,
    register,
    setValue,
    formState: { errors }
  } = useFormContext<AcademicPeriodData>();

  const removed = useWatch({
    control,
    name: `courses.${index}.removed`
  });

  useEffect(() => {
    if (setValue && !isEdition)
      setValue(`courses.${index}.grade`, removed ? "R" : null);
  }, [removed, setValue, index, isEdition]);

  return (
    <FormGrid item xs={6} md={2}>
      <FormLabel htmlFor={`courses.${index}.grade`}>
        Nota
      </FormLabel>
      <OutlinedInput
        id={`courses[${index}].grade`}
        placeholder="Nota"
        defaultValue={`${field.grade}`}
        disabled={removed}
        error={!!errors.courses?.[index]?.grade}
        {...register(`courses.${index}.grade`, { required: !removed, min: 0, max: 5 })}
      />
    </FormGrid>
  );
}

export default GradeInput;
