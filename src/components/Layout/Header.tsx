import { NavLink } from "react-router";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}> Dot Digital</h1>
      <nav className={styles.nav}>
        <NavLink to="/courses" className={styles.navLink}>
          Cursos
        </NavLink>
        <NavLink to="/enrollments" className={styles.navLink}>
          Matrículas
        </NavLink>
        <NavLink to="/users/register" className={styles.navLink}>
          Cadastro de Usuário
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
