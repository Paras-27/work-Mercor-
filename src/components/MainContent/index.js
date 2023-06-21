import ProjectHeader from "./ProjectHeader";
import TabsContainer from "./TabsContainer";
import TodosContainer from "./TodosContainer";

import styles from "./MainContent.module.css";

export default function MainContent() {
  return <div className={styles.container}>
    <ProjectHeader />
    <TabsContainer />
    <TodosContainer />
  </div>;
}
