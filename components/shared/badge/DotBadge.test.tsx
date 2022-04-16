import React from "react";
import { render } from "@testing-library/react";

import DotBadge from "./DotBadge";
import { PROGRESS_STATUS } from "../../../constants/survey_list";

describe("DotBadge", () => {
  it("renders DotBadge component", () => {
    const status = PROGRESS_STATUS.DONE;
    const element = render(<DotBadge status={status} />);

    element.getByText(status);
  });
});
