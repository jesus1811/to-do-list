import { TaskInterface } from "@/interface";
import { createTask, deleteTask } from "@/redux/slices/TasksSlice.slice";
import { useDispatch, useSelector } from "react-redux";

export const useTask = () => {
  const tasks = useSelector((store: any) => store.tasks);
  const dispatch = useDispatch();

  const handleCreateTask = ({ name, description }: TaskInterface, clean: () => void) => {
    if (name && description) {
      dispatch(createTask({ name, description }));
      clean();
    }
  };
  const handleDelteTask = ({ name }: Partial<TaskInterface>) => {
    dispatch(deleteTask(name));
  };
  return { handleCreateTask, tasks, handleDelteTask };
};
