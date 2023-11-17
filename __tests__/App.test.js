import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App Component Test Suite", () => {
  test("should render without crashing", () => {
    const { getByTestId } = render(<App />);
    const appComponent = getByTestId("app-component");
    expect(appComponent).toBeInTheDocument();
  });

  test("should render with default props", () => {
    const { getByText } = render(<App />);
    const defaultPropElement = getByText("Default Prop Value");
    expect(defaultPropElement).toBeInTheDocument();
  });
});
