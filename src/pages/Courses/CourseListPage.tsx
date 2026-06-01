import { useState } from "react";
import { useLoaderData } from "react-router";

import { CourseList } from "../../components/CourseList";

import type { PagedResponse } from "../../types/pagedResponse";
import type { Course } from "../../types/course";

function CourseListPage() {
  const initialRes = useLoaderData() as PagedResponse<Course>;

  const [courses, setCourses] = useState(initialRes.data);
  const [pagination, setPagination] = useState(initialRes.pagination);
  const [filters, setFilters] = useState<{
    search?: string;
    themes?: string[];
  }>({});

  const fetchCourses = async (page: number, newFilters = filters) => {
     const now = new Date().toISOString().split("T")[0];
          const start_date = now;
          const end_date = now;

    const params = new URLSearchParams({
      status: "disponível",
      page: page.toString(),
      limit: "10",
      start_date,
      end_date
    });

    if (newFilters.search) params.append("title", newFilters.search);
    if (newFilters.themes?.length) {
      newFilters.themes.forEach((t) => params.append("themes", t));
    }

    const res = await fetch(
      `http://localhost:3000/courses?${params.toString()}`,
    );
    const pagedRes: PagedResponse<Course> = await res.json();
    setCourses(pagedRes.data);
    setPagination(pagedRes.pagination);
  };

  return (
    <CourseList
      data={courses}
      pagination={pagination}
      onPageChange={(page) => fetchCourses(page)}
      onFilterChange={(newFilters) => {
        setFilters(newFilters);
        fetchCourses(1, newFilters);
      }}
    />
  );
}

export default CourseListPage;
