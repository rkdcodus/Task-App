import { createSlice } from "@reduxjs/toolkit";
import { ITask } from "../../types";

type TModalState = {
  boardId: string;
  listId: string;
  task: ITask;
};

const initialState: TModalState = {
  boardId: "board-0",
  listId: "list-0",
  task: {
    taskId: "task-0",
    taskName: "task 0",
    taskDescription: "task description",
    taskOwner: "Kang",
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    // action 생성 함수
  },
});

export const modalReducer = modalSlice.reducer; // 내보내기
