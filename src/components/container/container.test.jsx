import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Container } from "./Container";

describe("Container.tsx", () => {
  test("renders content", () => {
    const container = {
      title: "title test",
      description: "description test",
      children: "hello world",
    };
    const component = render(
      <Container title={container.title} description={container.description}>
        <h1>{container.children}</h1>
      </Container>
    );
    component.getByText(container.children);
  });
});
