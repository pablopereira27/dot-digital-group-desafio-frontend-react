import EnrollmentListItem from "./EnrollmentListItem";

import type { Enrollment } from "../../types/enrollment";

function EnrollmentList({ data }: { data: Enrollment[] }) {
  return (
    <>
      <div className="card-grid grid-items-1 my-4">
        {data.map((enrollment) => (
          <EnrollmentListItem
            key={enrollment.cohort.id}
            cohort={enrollment.cohort}
          />
        ))}
      </div>
    </>
  );
}

export default EnrollmentList;
