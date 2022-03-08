import React from "react";
import { render } from "@testing-library/react";
import Login from "./login";
import { useSelector } from "react-redux";
import { LOGIN, SIGN_UP } from "../store/actions/actionTypes";

jest.mock("react-redux");

const loginPageMode = [{ mode: LOGIN }, { mode: SIGN_UP }];

// @ts-ignore
useSelector.mockImplementation((selector) =>
  selector({
    loginPageMode,
  })
);

describe("Login", () => {
  it("renders Login component", () => {
    render(<Login />);
  });
});
