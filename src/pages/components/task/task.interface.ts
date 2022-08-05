import React from "react";
import { TaskInterface } from "@/interface";

export interface Props {
  task: TaskInterface;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
