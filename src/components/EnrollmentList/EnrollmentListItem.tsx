import type { Cohort } from "../../types/cohort";

function EnrollmentListItem({ cohort }: { cohort: Cohort }) {
  return (
    <div className="card">
      <h2 className="mb-2">{cohort.course.title}</h2>
      <h3 className="mb-2">{cohort.title}</h3>
      <ul className="chip-list">
        {cohort.course.themes.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EnrollmentListItem;
