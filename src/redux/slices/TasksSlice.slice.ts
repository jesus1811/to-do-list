import { TaskInterface } from "@/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TaskInterface[] = [
  {
    name: "hola",
    description: "mundo",
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.name != action.payload);
    },
  },
});

export const { createTask, deleteTask } = tasksSlice.actions;