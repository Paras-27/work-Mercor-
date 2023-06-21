import User1 from "../../assets/images/User1.png";
import User2 from "../../assets/images/User2.png";
import User3 from "../../assets/images/User3.png";
import User4 from "../../assets/images/User4.png";
import User5 from "../../assets/images/User5.png";

import styles from "./Users.module.css";

export default function Users({ users, width, height, offset, overlap }) {
  const renderUsers = users.length > 4 ? users.slice(0, 4) : users;
  const count = users.length > 4 ? users.length - 4 : 0;

  const usersObj = {
    User1: User1,
    User2: User2,
    User3: User3,
    User4: User4,
    User5: User5,
  };

  return (
    <div className={styles.usersList}>
      {renderUsers.map((user, idx) => {
        const styles =
          overlap === "right"
            ? {
                zIndex: 20 - idx,
                marginLeft: offset === "4" ? "-4px" : "-8px",
              }
            : {
                zIndex: 20 + idx,
                marginRight: offset === "4" ? "-4px" : "-8px",
              };
        return (
          <img
            src={usersObj[user]}
            alt={user}
            className={styles.profile}
            width={width}
            height={height}
            style={styles}
            key={user}
          />
        );
      })}
      {count !== 0 && (
        <span className={styles.count} style={{ width: width, height: height }}>
          +{count}
        </span>
      )}
    </div>
  );
}
