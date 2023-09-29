import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span>Feito por</span>
      <a href="https://wa.me/5584981899212" target="_blank">
        Thiago Cordeiro
      </a>
    </footer>
  );
}
