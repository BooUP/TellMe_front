import React from "react";
import { render } from "@testing-library/react";

import Header from "./Header";

describe("Header", () => {
  it("renders Header component", () => {
    const element = render(<Header />);

    element.getByText("TELL ME");
  });
});
