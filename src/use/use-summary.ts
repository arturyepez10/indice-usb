import { useEffect, useState } from "react";
import { AcademicPeriod, AcademicSummary, Course } from "@arturyepez10/indice-usb-node";

import { useReduxStore } from "./redux-store";
import { AcademicPeriodData } from "../store/academics";

export const useAcademicSummary = () => {
  const {
    state: {
      academics
    }
  } = useReduxStore();

  const [summary] = useState(new AcademicSummary());

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

    return period;
  }

  useEffect(() => {
    if (academics.periods.length) {
      const periods = academics.periods.map((period) => (
        parseAcademicPeriod(period)
      ));

      summary.academic_periods = periods;
    }
  }, [academics.periods, academics.periods.length, summary]);

  return {
    summary,
    parseAcademicPeriod
  };
};

export default useAcademicSummary;