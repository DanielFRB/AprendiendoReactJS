import React from "react";
import Star from "./Star";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Great Star/);
  expect(h1).toHaveTextContent("Great Star");
});