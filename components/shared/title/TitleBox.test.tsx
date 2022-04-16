import React from "react";
import { render } from "@testing-library/react";
import TitleBox from "./TitieBox";

const handleClick = jest.fn();

describe("TitleBox", () => {
  it("renders TitleBox component", () => {
    const title = "제목 입니다.";
    const buttonInfo = [
      {
        text: "버튼 택스트입니다.",
        onClick: handleClick(),
      },
    ];

    const element = render(<TitleBox title={title} buttonInfo={buttonInfo} />);

    element.getByText(title);
    element.getByText(buttonInfo[0].text);
    expect(handleClick).toBeCalled();
  });
});
