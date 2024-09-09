import { useCallback, useEffect, useState } from "react";
import { AcademicPeriod, AcademicSummary, Course } from "@arturyepez10/indice-usb-node";

import { useReduxStore } from "./redux-store";
import { AcademicPeriodData } from "../store/academics";

export const useAcademicSummary = () => {
  const {
    state: {
      academics
    },
    updateAccumulatedGrade
  } = useReduxStore();

  const [summary] = useState(new AcademicSummary());
  const [summary_grade, setSummaryGrade] = useState(0);

  const parseAcademicPeriod = (academicPeriod: AcademicPeriodData) => {
    const period = new AcademicPeriod(
      academicPeriod.name,
      academicPeriod.year ?? undefined
    );

    academicPeriod.courses.forEach((course) => {
      period.add_course(
        new Course(
          course.code,
          course.name,
          course.credits!, // Value will always be defined (because of data validation)
          course.grade ?? "R",
          course.removed,
          course.has_effect
        )
      )
    });

    period.accumulated_grade = academicPeriod.accumulated_grade;

    return period;
  }

  const updateSummary = useCallback(() => {
    summary.academic_periods = [];

    academics.periods.forEach((p, index) => {
      const period = parseAcademicPeriod(p);
      summary.add_academic_period(period);

      summary.academic_periods[index].accumulated_grade = summary.summary_grade();
      updateAccumulatedGrade(index, summary.summary_grade());
    });

    setSummaryGrade(summary.summary_grade());
  }, [academics.periods, summary, updateAccumulatedGrade]);

  useEffect(() => {
    updateSummary();
  }, [academics.periods.length, updateSummary]);

  return {
    summary,
    summary_grade,
    parseAcademicPeriod,
    updateSummary
  };
};

export default useAcademicSummary;