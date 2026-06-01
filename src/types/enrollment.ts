import type { ApiLink } from "./apiLink";
import type { Cohort } from "./cohort";

export interface Enrollment {
  id: string;
  cohort: Cohort;
  status: string
  created_at: string;
  updated_at: string;
  links: ApiLink[];
}
