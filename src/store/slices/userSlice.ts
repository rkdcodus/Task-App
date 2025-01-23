import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser } = userSlice.actions;
