import { Draggable } from "react-beautiful-dnd";

import MobileAppDesign from "../../assets/images/MobileAppDesign.png";
import Moodboard1 from "../../assets/images/Moodboard1.png";
import Moodboard2 from "../../assets/images/Moodboard2.png";
import OnboardingIllustrations from "../../assets/images/OnboardingIllustrations.png";
import { Menu1 } from "../../assets/icons/Menu1";
import { Message16 } from "../../assets/icons/Message16";
import { Folder } from "../../assets/icons/Folder";
import Users from "../UI/Users";

import styles from "./TodoItem.module.css";

export default function TodoItem({ todo, index }) {
  const picturesObj = {
    MobileAppDesign: MobileAppDesign,
    Moodboard1: Moodboard1,
    Moodboard2: Moodboard2,
    OnboardingIllustrations: OnboardingIllustrations,
  };
  return (
    <Draggable draggableId={todo.id.toString()} key={todo.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className={styles.todo}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <header className={styles.todoHeader}>
              <span
                className={`${styles.priority} ${
                  todo.status === "completed"
                    ? styles.completed
                    : todo.priority === "low"
                    ? styles.low
                    : styles.high
                }`}
              >
                {todo.status === "completed" ? todo.status : todo.priority}
              </span>
              <Menu1 />
            </header>
            <main className={styles.todoInfo}>
              <h3 className={styles.todoName}>{todo.title}</h3>
              {todo.description && (
                <p className={styles.todoDescription}>{todo.description}</p>
              )}
              {todo.image.length !== 0 && (
                <div className={styles.images}>
                  {todo.image.map((picture) => (
                    <img src={picturesObj[picture]} alt={picture} />
                  ))}
                </div>
              )}
            </main>
            <footer className={styles.footer}>
              <Users
                users={todo.users}
                width="24px"
                height="24px"
                offset="4"
                overlap="right"
              />
              <section className={styles.tagsContainer}>
                <span className={styles.tag}>
                  <Message16 />
                  {todo.comments + " comments"}
                </span>
                <span className={styles.tag}>
                  <Folder />
                  {todo.files + " files"}
                </span>
              </section>
            </footer>
            {provided.placeholder}
          </div>
        );
      }}
    </Draggable>
  );
}
