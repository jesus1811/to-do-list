import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Task from "./Task";

describe("Task.tsx", () => {
  test("renders content", () => {
    const task = {
      name: "hello world",
      description: "description test",
    };
    const component = render(<Task task={task} onClick={() => {}} />);
    component.getByText(task.name);
    component.getByText(task.description);
  });
  test("onClick button", () => {
    const mockhandler = jest.fn();

    const task = {
      name: "hello world",
      description: "description test",
    };
    const component = render(<Task task={task} onClick={mockhandler} />);

    const button = component.getByText("Eliminar");
    fireEvent.click(button);
    expect(mockhandler.mock.calls).toHaveLength(1);
  });
});
