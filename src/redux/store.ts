import { configureStore } from "@reduxjs/toolkit";
import { tasksSlice } from "./slices/TasksSlice.slice";

export const Store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
