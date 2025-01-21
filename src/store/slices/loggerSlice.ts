import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogItem } from "../../types";

type TLoggerState = {
  logArray: ILogItem[];
};

const initialState: TLoggerState = {
  logArray: [],
};

const loggerSlice = createSlice({
  name: "logger",
  initialState,
  reducers: {
    // action 생성 함수
    addLog: (state, { payload }: PayloadAction<ILogItem>) => {
      state.logArray.push(payload);
    },
  },
});

export const { addLog } = loggerSlice.actions;
export const loggerReducer = loggerSlice.reducer;
