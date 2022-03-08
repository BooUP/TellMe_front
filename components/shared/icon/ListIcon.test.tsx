import React from "react";
import { render } from "@testing-library/react";

import ListIcon from "./ListIcon";
import { PROGRESS_STATUS } from "../../../constants/survey_list";

describe("ListIcon", () => {
  it("renders ListIcon component", () => {
    const status = PROGRESS_STATUS.DONE;
    render(<ListIcon status={status} />);
  });
});
