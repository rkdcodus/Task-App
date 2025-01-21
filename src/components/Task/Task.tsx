import React from "react";
import { container, description, title } from "./Task.css";

type TTaskProps = {
  taskName: string;
  taskDescription: string;
  boardId: string;
  id: string;
  index: number;
};

const Task = ({ taskName, taskDescription, boardId, id, index }: TTaskProps) => {
  return (
    <div className={container}>
      <div className={title}>{taskName}</div>
      <div className={description}>{taskDescription}</div>
    </div>
  );
};

export default Task;
