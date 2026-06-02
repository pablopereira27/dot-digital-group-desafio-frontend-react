import { useState } from "react";
import { useLoaderData } from "react-router";

import { EnrollmentList } from "../../components/EnrollmentList";

import type { Enrollment } from "../../types/enrollment";
import type { PagedResponse } from "../../types/pagedResponse";
import type { User } from "../../types/user";

function EnrollmentsPage() {
  const initialRes = useLoaderData() as PagedResponse<User>;

  const [users] = useState(initialRes.data);
  const [enrollments, setEnrollments] = useState([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const fetchUserCourses = async () => {
    const res = await fetch(
      `http://localhost:3000/users/${selectedUser}/courses`,
    );
    const pagedRes: PagedResponse<Enrollment> = await res.json();
    setEnrollments(pagedRes.data);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedUser) return;
    fetchUserCourses();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row justify-content-between align-items-center mb-3">
          <select
            value={selectedUser ?? ""}
            onChange={(e) => setSelectedUser(Number(e.target.value))}
            required
          >
            <option value="">Selecione um usuário</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
          <button type="submit">Filtrar</button>
        </div>
      </form>

      <EnrollmentList data={enrollments} />
    </>
  );
}

export default EnrollmentsPage;
