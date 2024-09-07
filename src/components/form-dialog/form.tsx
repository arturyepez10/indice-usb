import { useEffect } from "react";
import { useForm, useFieldArray, SubmitHandler } from "react-hook-form";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { styled } from "@mui/material";

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useReduxStore } from "../../use/redux-store";
import { AcademicPeriodData } from "../../store/academics";
import GradeInput from "./grade-input";

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const defaultValues: AcademicPeriodData = {
  name: "",
  year: null,
  courses: [],
  accumulated_grade: 0
}

const defaultCourse = {
  code: "",
  name: "",
  credits: null,
  grade: null,
  has_effect: true,
  removed: false
}

export const PeriodForm = () => {
  const {
    state: {
      settings: { editPeriod },
      academics: { periods }
    },
    togglePeriodModal,
    addAcademicPeriod
  } = useReduxStore();
  const {
    control,
    handleSubmit,
    register,
    setValue,
    reset
  } = useForm<AcademicPeriodData>({ defaultValues });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "courses"
  });

  useEffect(() => {
    if (editPeriod.status && editPeriod.index !== null) {
      const period = periods[editPeriod.index];
      reset(period);
    }
  }, [editPeriod.status, editPeriod.index, periods, reset]);

  const createPeriod: SubmitHandler<AcademicPeriodData> = (data) => {
    addAcademicPeriod(
      {
        ...data,
        courses: data.courses.map((course) => ({
          ...course,
          grade: course.grade !== "R" && course.grade !== null ? +course.grade : "R",
          credits: course.credits !== null ? +course.credits : null
        }))
      },
      editPeriod.index ?? undefined
    );
    togglePeriodModal(false);
  };

  return (
    <form onSubmit={handleSubmit(createPeriod)}>
      <Grid container spacing={3}>
        <Grid item container xs={12} spacing={2}>
          <FormGrid item xs={12} md={8}>
            <FormLabel htmlFor="name">
              Nombre de Periodo
            </FormLabel>
            <OutlinedInput
              id="name"
              type="name"
              placeholder="Enero - Marzo"
              {...register("name")}
            />
          </FormGrid>
          <FormGrid item xs={12} md={4}>
            <FormLabel htmlFor="year">
              Año
            </FormLabel>
            <OutlinedInput
              id="year"
              type="number"
              placeholder="2022"
              {...register("year")}
            />
          </FormGrid>
        </Grid>

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
                    {...register(`courses.${index}.code`)}
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
                    {...register(`courses.${index}.name`)}
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
                    {...register(`courses.${index}.credits`)}
                  />
                </FormGrid>
                <GradeInput 
                  control={control}
                  register={register}
                  setValue={setValue}
                  field={field}
                  isEdition={editPeriod.status}
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
      </Grid>
    </form>
  )
}

export default PeriodForm;
