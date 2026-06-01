import type { ApiLink } from "./apiLink";
import type { Cohort } from "./cohort";

export interface Course {
  id: string;
  title: string;
  description: string;
  themes: string[];
  image_url: string;
  created_at: string;
  updated_at: string;
  cohorts?: Cohort[];
  links: ApiLink[];
}
