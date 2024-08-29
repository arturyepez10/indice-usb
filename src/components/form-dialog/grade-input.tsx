/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { Control, useWatch, UseFormRegister, FieldArrayWithId, UseFormSetValue } from 'react-hook-form';
import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from "@mui/material";

import { AcademicPeriodData } from '../../store/academics';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

interface GradeInputProps {
  control: Control<AcademicPeriodData, any>;
  register: UseFormRegister<AcademicPeriodData>;
  setValue: UseFormSetValue<AcademicPeriodData>;
  field: FieldArrayWithId<AcademicPeriodData, "courses", "id">;
  isEdition?: boolean;
  index: number;
}

export const GradeInput = ({
  control,
  register,
  setValue,
  field,
  isEdition,
  index
}: GradeInputProps) => {
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
        {...register(`courses.${index}.grade`)}
      />
    </FormGrid>
  );
}

export default GradeInput;
