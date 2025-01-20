import { createSlice } from "@reduxjs/toolkit";
import { IBoard } from "../../types";

type TBoardsState = {
  modalActive: boolean;
  boardArray: IBoard[];
};

const initialState: TBoardsState = {
  modalActive: false,
  boardArray: [
    {
      boardId: "board-0",
      boardName: "첫 번째 게시물",
      lists: [
        {
          listId: "list-0",
          listName: "List 1",
          tasks: [
            {
              taskId: "task-0",
              taskName: "Task 1",
              taskDescription: "description",
              taskOwner: "Kang",
            },
            {
              taskId: "task-1",
              taskName: "Task 2",
              taskDescription: "description",
              taskOwner: "Kang",
            },
          ],
        },
        {
          listId: "list-1",
          listName: "List 2",
          tasks: [
            {
              taskId: "task-2",
              taskName: "Task 3",
              taskDescription: "description",
              taskOwner: "Kang",
            },
            {
              taskId: "task-3",
              taskName: "Task 4",
              taskDescription: "description",
              taskOwner: "Kang",
            },
          ],
        },
      ],
    },
  ],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    // action 생성 함수
  },
});

export const boardsReducer = boardSlice.reducer;
