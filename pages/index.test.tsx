import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders Home component", () => {
    const rander = render(<Home />);
    rander.getByText("Tell Me");
  });
});
