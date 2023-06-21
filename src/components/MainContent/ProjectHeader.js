import { Link } from "../../assets/icons/Link";
import { EditPen } from "../../assets/icons/EditPen";
import { AddSquare } from "../../assets/icons/AddSquare";
import Users from "../UI/Users";

import styles from "./ProjectHeader.module.css";

export default function ProjectHeader() {
  return (
    <div className={styles.projectHeader}>
      <div className={styles.left}>
        <h1 className={styles.projectTitle}>Mobile App</h1>
        <EditPen />
        <Link />
      </div>
      <div className={styles.right}>
        <AddSquare />
        <span className={styles.inviteLink}>Invite</span>
        <Users users={["User1", "User4", "User3", "User2", "User5", "User6"]} width="38px" height="38px" overlap="left" offset="8"/>
      </div>
    </div>
  );
}
