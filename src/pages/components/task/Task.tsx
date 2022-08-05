import { TaskInterface } from "@/interface";
import { Button, Card, Paragraph, Title } from "@/styled-components";

interface Props {
  task: TaskInterface;
}

const Task = ({ task }: Props) => {
  return (
    <Card gap="10px">
      <Card column gap="10px" flex="100px">
        <Title>{task.name}</Title>
        <Paragraph>{task.description}</Paragraph>
      </Card>
      <Card column gap="10px" flex="100px">
        <Button>Eliminar</Button>
      </Card>
    </Card>
  );
};
export default Task;
