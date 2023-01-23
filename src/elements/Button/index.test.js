import React from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
