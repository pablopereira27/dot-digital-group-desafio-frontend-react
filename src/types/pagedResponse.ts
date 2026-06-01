import type { ApiLink } from "./apiLink";
import type { PaginationParams } from "./pagination";

export interface PagedResponse<T> {
    data: T[];
    pagination: PaginationParams;
    links: ApiLink[]
  };