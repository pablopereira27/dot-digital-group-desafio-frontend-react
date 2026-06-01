import { useEffect, useState } from "react";
import { Modal } from "../Modal";

// import type { Cohort } from "../../types/cohort";
import type { Course } from "../../types/course";

import styles from "./courseListItem.module.css";
import type { User } from "../../types/user";

// function getValidCohort(cohorts: Cohort[]): Cohort | undefined {
//   const now = new Date();

//   for (const cohort of cohorts) {
//     const start = new Date(cohort.start_date);
//     const end = new Date(cohort.end_date);

//     if (end > now && cohort.vacancies > 0) {
//       const duration = end.getTime() - start.getTime();
//       const remaining = end.getTime() - now.getTime();
//       const percentRemaining = remaining / duration;

//       if (percentRemaining >= 0.3) {
//         return cohort;
//       }
//     }
//   }

//   // fallback: última turma disponível
//   return cohorts[cohorts.length - 1];
// }

// function getCohortTimeInfo(cohort) {
//   const now = new Date();
//   const start = new Date(cohort?.start_date);
//   const end = new Date(cohort?.end_date);

//   let message =
//     now > start ? "A turma atual termina em " : "A próxima turma começa em ";
//   message += (now > start ? end : start).toLocaleDateString() + ".";
//   return message;
// }

function CourseListItem({ course }: { course: Course }) {
  const { title, themes, image_url, cohorts } = course;
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  // const cohort = getValidCohort(cohorts);
  const cohort = cohorts[0];

  useEffect(() => {
    if (open) {
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((jsonData: { data: User[] }) => setUsers(jsonData.data));
    }
  }, [open]);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedUser) return;

    try {
      const res = await fetch(`http://localhost:3000/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: selectedUser,
          cohort_id: cohorts[0].id,
        }),
      });

      if (res.status === 201) {
        setOpen(false);
        alert("Matrícula realizada com sucesso!");
      } else {
        const json = await res.json();
        throw new Error(json.error);
      }
    } catch (error) {
      alert(`Erro ao realizar matrícula. ${error.message}`);
    }
  };

  return (
    <div className={styles.courseCard + " card"}>
      <h2 className="mb-2">{title}</h2>
      <ul className="chip-list">
        {themes.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>
      <img className={styles.courseImage} src={image_url} alt={title} />

      {/* {cohort ? (
        <p>{getCohortTimeInfo(cohort)}</p>
      ) : (
        <p>Nenhuma turma disponível no momento</p>
      )} */}

      <div className="row justify-content-end mt-2">
        {cohort && <p className="chip chip-lg">{cohort?.vacancies} vagas</p>}
        <button onClick={() => setOpen(true)}>Se matricular</button>

        <Modal
          size="sm"
          title={"Matricule-se no " + course.title}
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <form onSubmit={handleSubmit}>
            <select
              value={selectedUser ?? ""}
              onChange={(e) => setSelectedUser(Number(e.target.value))}
              required
              style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
            >
              <option value="">Selecione um usuário</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
            <div className="row justify-content-end mt-2">
              <button type="submit" className="btn-primary">
                Confirmar matrícula
              </button>
              <button type="button" onClick={() => setOpen(false)}>
                Fechar
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
}

export default CourseListItem;
