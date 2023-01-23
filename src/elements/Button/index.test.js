import React from "react";
import { render } from "@testing-library/react";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Router } from "react-router-dom";
import Button from "./index";

test("Should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});

test("Should render loading/spinner", () => {
  const { container, getBytext } = render(<Button isLoading></Button>);

  expect(getBytext(/loading/i)).toBeInTheDocument();
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("span")).toBeInTheDocument();
});

test("Should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("a")).toBeInTheDocument();
});

test("Should render <Link> component", () => {
  const { container } = render(
    // eslint-disable-next-line react/jsx-no-undef
    <Router>
      <Button href="" type="link"></Button>
    </Router>
  );

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector("a")).toBeInTheDocument();
});
