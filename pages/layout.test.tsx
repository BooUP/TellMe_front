import React from "react";
import { render } from "@testing-library/react";
import Layout from "./layout";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementationOnce(() => ({
  asPath: "/login",
}));

describe("Layout", () => {
  it("renders Layout component", () => {
    render(<Layout />);
  });
});
