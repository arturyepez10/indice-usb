import { useFormContext, useFieldArray } from 'react-hook-form';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from "@mui/material/FormLabel";
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material";

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { AcademicPeriodData } from "../../store/academics";
import { useReduxStore } from '../../use/redux-store';
import GradeInput from "./grade-input";

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const defaultCourse = {
  code: "",
  name: "",
  credits: null,
  grade: null,
  has_effect: true,
  removed: false
}

export const CourseList = () => {
  const {
    state: {
      settings: { editPeriod }
    }
  } = useReduxStore();
  const { control, register, formState: { errors } } = useFormContext<AcademicPeriodData>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses",
    rules: { required: true, minLength: 1 }
  });

  return (
    <Grid item container xs={12} spacing={2}>
      <Grid item xs={12}>
        <Box display="flex" alignItems="center">
          <FormLabel style={{ margin: 0 }}>
            Cursos
          </FormLabel>
          <ButtonGroup
            variant="outlined"
            size="small"
            style={{ paddingLeft: 3}}
          >
            <IconButton disabled={!fields.length} onClick={() => remove(fields.length - 1)}>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <IconButton onClick={() => append(defaultCourse)}>
              <AddCircleOutlineIcon />
            </IconButton>
          </ButtonGroup>
          {errors.courses?.length
            ? (
              <Typography variant="caption" color="error">
                Debe agregar al menos un curso válido.
              </Typography>
            ) : null}
        </Box>
      </Grid>
      <Grid item xs={12} marginX={{ xs: 0, md: 3 }}>
        {fields.map((field, index) => (
          <Grid container spacing={1} key={field.id} marginTop={3}>
            <FormGrid item xs={4} md={3}>
              <FormLabel htmlFor={`courses[${index}].code`}>
                Código
              </FormLabel>
              <OutlinedInput
                id={`courses[${index}].code`}
                type="text"
                placeholder="Código"
                defaultValue={field.code}
                error={!!errors.courses?.[index]?.code}
                {...register(`courses.${index}.code`, { required: true })}
              />
            </FormGrid>
            <FormGrid item xs={8} md={5}>
              <FormLabel htmlFor={`courses[${index}].name`}>
                Nombre
              </FormLabel>
              <OutlinedInput
                id={`courses[${index}].name`}
                type="text"
                placeholder="Nombre"
                defaultValue={field.name}
                error={!!errors.courses?.[index]?.name}
                {...register(`courses.${index}.name`, { required: true })}
              />
            </FormGrid>
            <FormGrid item xs={6} md={2}>
              <FormLabel htmlFor={`courses[${index}].credits`}>
                Créditos
              </FormLabel>
              <OutlinedInput
                id={`courses.${index}.credits`}
                type="number"
                placeholder="Créditos"
                defaultValue={field.credits}
                error={!!errors.courses?.[index]?.credits}
                {...register(`courses.${index}.credits`, { required: true })}
              />
            </FormGrid>
            <GradeInput 
              field={field}
              index={index}
            />
            <FormGrid item xs={12} md={6}>
              <FormGroup>
                <FormControlLabel
                  label="Retirada"
                  control={
                    <Checkbox 
                      defaultChecked={field.removed}
                      {...register(`courses.${index}.removed`)}
                    />
                  }
                />
              </FormGroup>
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormGroup>
                <FormControlLabel
                  label="Con efecto"
                  control={
                    <Checkbox
                      defaultChecked={field.has_effect}
                      {...register(`courses.${index}.has_effect`)}
                    />
                  }
                />
              </FormGroup>
            </FormGrid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item container xs={12} justifyContent="flex-end">
        <Button type="submit">
          {
            editPeriod.status
              ? "Actualizar"
              : "Agregar"
          }
        </Button>
      </Grid>
    </Grid>
  )
};

export default CourseList;