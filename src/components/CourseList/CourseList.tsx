import type { Course } from "../../types/course";
import type { PaginationParams } from "../../types/pagination";
import Pagination from "../Pagination";

import CourseListItem from "./CourseListItem";

const themes = [
  "inovação",
  "tecnologia",
  "marketing",
  "empreendedorismo",
  "agro",
];

function CourseList({
  data,
  pagination,
  onPageChange,
  onFilterChange,
}: {
  data: Course[];
  pagination: PaginationParams;
  onPageChange: (page: number) => void;
  onFilterChange: (filters: { search?: string; themes?: string[] }) => void;
}) {
  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search")?.toString();
    const themes = formData.getAll("themes").map(String);
    onFilterChange({ search, themes });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            name="search"
            placeholder="Informe o nome do curso desejado"
          />
        </div>
        <div className="row justify-content-between  align-items-start md:align-items-center my-3">
          <div className="flex flex-col align-items-start md:flex-row md:justify-items-start gap-2">
            {themes.map((theme) => (
              <label
                htmlFor={theme}
                className="flex align-items-center mr-4"
                key={theme}
              >
                <input
                  type="checkbox"
                  name="themes"
                  id={theme}
                  value={theme}
                  className="mr-2"
                />
                {theme}
              </label>
            ))}
          </div>
          <button type="submit">Filtrar</button>
        </div>
      </form>

      <div className="card-grid my-4">
        {data.map((course) => (
          <CourseListItem key={course.id} course={course} />
        ))}
      </div>
      {pagination.totalPages > 1 && (
        <Pagination paginationParams={pagination} onPageChange={onPageChange} />
      )}
    </>
  );
}

export default CourseList;
