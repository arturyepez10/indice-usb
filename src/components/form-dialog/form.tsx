import { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import Grid from "@mui/material/Grid";
import FormLabel from "@mui/material/FormLabel";
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from "@mui/material";

import { useReduxStore } from "../../use/redux-store";
import { AcademicPeriodData } from "../../store/academics";

import CourseList from "./course-list";

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

export const PeriodForm = () => {
  const {
    state: {
      settings: { editPeriod },
      academics: { periods }
    },
    togglePeriodModal,
    addAcademicPeriod
  } = useReduxStore();
  const methods = useForm<AcademicPeriodData>({ defaultValues });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = methods;

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
    <FormProvider {...methods}>
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
                error={!!errors.name}
                {...register("name", { required: true })}
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
                error={!!errors.year}
                {...register("year", { required: true })}
              />
            </FormGrid>
          </Grid>

          <CourseList />
        </Grid>
      </form>
    </FormProvider>
  )
}

export default PeriodForm;
