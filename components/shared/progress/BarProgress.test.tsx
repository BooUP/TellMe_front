import React from "react";
import { render } from "@testing-library/react";

import BarProgress from "./BarProgress";

describe("BarProgress", () => {
  it("renders BarProgress component", () => {
    const number = 100;
    render(<BarProgress number={number} />);
  });
});
