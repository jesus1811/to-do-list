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

    expect(component.container).toHaveTextContent("hello world");
    expect(component.container).toHaveTextContent("description test");
  });
});
