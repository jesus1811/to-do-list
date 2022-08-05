import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Container } from "./Container";
describe("Container.tsx", () => {
  test("renders content", () => {
    const component = render(
      <Container title="title test" description="description test">
        <div>
          <h1>hello world</h1>
        </div>
      </Container>
    );
    expect(component.container).toHaveTextContent("hello world");
  });
});
