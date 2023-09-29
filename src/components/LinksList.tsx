import { BsWhatsapp, BsInstagram, BsWindowDesktop } from "react-icons/bs";
import styles from "./LinksList.module.css";

export function LinksList() {
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <a href="http://wa.me/5584991418026" target="_blank">
            <BsWhatsapp /> <span>WhatsApp (Agendamentos)</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/esteticaalanalima/"
            target="_blank"
          >
            <BsInstagram />
            <span>Instagram</span>
          </a>
        </li>

        <li>
          <a href="#">
            <BsWindowDesktop />
            <span>Site - Em breve</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
