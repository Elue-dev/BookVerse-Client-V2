import { BiBookReader } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import styles from "./footer.module.scss";

export default function Footer() {
  const location = useLocation();
  if (location.pathname.includes("auth")) return;

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>
          <Link to="/">
            <BiBookReader />
            <b>BOOKVERSE</b>
          </Link>
        </p>
        <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
      <p className={styles.disclaimer}>
        <b>DISCLAIMER:</b> We do not actually sell any of these books, this is
        just a side project to practice.
      </p>
    </footer>
  );
}
