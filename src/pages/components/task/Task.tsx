import { TaskInterface } from "@/interface";
import { Button, Card, Paragraph, Title } from "@/styled-components";
import React from "react";

interface Props {
  task: TaskInterface;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Task = ({ task, onClick }: Props) => {
  return (
    <Card gap="10px">
      <Card column gap="10px" flex="100px">
        <Title>{task.name}</Title>
        <Paragraph>{task.description}</Paragraph>
      </Card>
      <Card column gap="10px" flex="100px">
        <Button onClick={onClick}>Eliminar</Button>
      </Card>
    </Card>
  );
};
export default Task;
