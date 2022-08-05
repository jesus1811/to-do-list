import React from "react";
import type { NextPage } from "next";
import { Container } from "@/components";
import { Button, Card, Input, Paragraph, Title } from "@/styled-components";
import { useField, useTask } from "@/hooks";
import { TaskInterface } from "@/interface";
import { Task } from "./components";

const Home: NextPage = () => {
  const { tasks, handleCreateTask } = useTask();
  const name = useField("");
  const description = useField("");
  return (
    <Container title="Home page" description="aplicacion web de tareas">
      <Title>Multi Task</Title>
      <Card>
        <Card column gap="14px" flex="200px">
          <Paragraph>Nombre</Paragraph>
          <Input {...name} type="text" />
        </Card>
        <Card column gap="14px" flex="200px">
          <Paragraph>Decripcion</Paragraph>
          <Input {...description} type="text" />
        </Card>
        <Card flex="200px">
          <Button onClick={() => handleCreateTask({ name: name.value, description: description.value })}>
            Agregar Tarea
          </Button>
        </Card>
      </Card>
      {tasks.map((task: TaskInterface, index: number) => (
        <Task key={index} task={task} />
      ))}
    </Container>
  );
};

export default Home;
