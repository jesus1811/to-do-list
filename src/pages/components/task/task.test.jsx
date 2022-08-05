import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Task from "./Task";

describe("Task.tsx", () => {
  test("renders content", () => {
    const task = {
      name: "hello world",
      description: "description test",
    };
    const component = render(<Task task={task} />);
    component.getByText(task.name);
    component.getByText(task.description);

    // expect(component.container).toHaveTextContent(task.name);
    // expect(component.container).toHaveTextContent(task.description);
  });
});
