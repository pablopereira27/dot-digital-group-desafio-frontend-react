import type { Course } from "./course";

export interface Cohort {
  id: number;
  title: string;
  vacancies: number;
  status: string;
  start_date: string;
  end_date: string;
  course?: Course
}
