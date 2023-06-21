import { Calendar2 } from "../../assets/icons/Calendar2";
import { MessageQuestion } from "../../assets/icons/MessageQuestion";
import { Notification } from "../../assets/icons/Notification";

import styles from "./IconMenu.module.css";

export default function IconMenu() {
  return (
    <span className={styles.iconMenu}>
      <Calendar2 />
      <MessageQuestion />
      <Notification />
    </span>
  );
}
