import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { dummyProjects } from "../../dummyData";
import TodosList from "../Todos/TodosList";

import styles from "./TodosContainer.module.css";

export default function TodosContainer() {
  const [notStartedTodos, setNotStartedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "not started")
  );
  const [startedTodos, setStartedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "started")
  );
  const [completedTodos, setCompletedTodos] = useState(
    dummyProjects[0].toDos.filter((todo) => todo.status === "completed")
  );

  const findTodoById = (id, array) => {
    return array.find((todo) => todo.id === id);
  };

  const removeTodoById = (id, array) => {
    return array.filter((todo) => todo.id !== id);
  };

  const handleDrag = (result) => {
    const { destination, source, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    if (source.droppableId === "1") {
      setNotStartedTodos(removeTodoById(draggableId, notStartedTodos));
    } else if (source.droppableId === "2") {
      setStartedTodos(removeTodoById(draggableId, startedTodos));
    } else {
      setCompletedTodos(removeTodoById(draggableId, completedTodos));
    }

    const todo = findTodoById(draggableId, [
      ...notStartedTodos,
      ...startedTodos,
      ...completedTodos,
    ]);

    if (destination.droppableId === "1") {
      setNotStartedTodos([
        { ...todo, status: "not started" },
        ...notStartedTodos,
      ]);
    } else if (destination.droppableId === "2"){
      setStartedTodos([
        { ...todo, status: "started" },
        ...startedTodos,
      ]);
    } else {
      setCompletedTodos([
        { ...todo, status: "completed" },
        ...completedTodos,
      ])
    }
  };

  return (
    <DragDropContext onDragEnd={handleDrag}>
      <div className={styles.todosContainer}>
        <TodosList todosList={notStartedTodos} type="not-started" id={"1"} />
        <TodosList todosList={startedTodos} type="started" id={"2"} />
        <TodosList todosList={completedTodos} type="completed" id={"3"} />
      </div>
    </DragDropContext>
  );
}
