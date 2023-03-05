import Link from "next/link";
import Button from "../Button";
import styles from "./index.module.css";

const NavBar = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarMenu}>
          <li className={styles.navbarItem}>
            {" "}
            <Link href="/">Техничка</Link>{" "}
          </li>
          <li className={styles.navbarItem}>
            {" "}
            <Link href="/">Камеры</Link>{" "}
          </li>
          <li className={styles.navbarItem}>
            {" "}
            <Link href="/">Ивенты</Link>{" "}
          </li>
        </ul>
      </nav>
      <Button/>
    </div>
  );
};
export default NavBar;
