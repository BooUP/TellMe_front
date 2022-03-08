import React from "react";
import { render } from "@testing-library/react";
import SurveyList from "./survey_list";

describe("SurveyList", () => {
  it("renders SurveyList component", () => {
    render(<SurveyList />);
  });
});
