import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
export default function Button(props) {
  const className = [props.className];
  if (propTypes.isPrimary) className.push("btn-primary");
  if (propTypes.isLarge) className.push("btn-lg");
  if (propTypes.isSmall) className.push("btn-sm");
  if (propTypes.isBlock) className.push("btn-shadow");
  if (propTypes.hasShadow) className.push("btn-primary");

  const onClick = () => {
    if (propTypes.onClick) propTypes.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "Link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      <Link
        to={props.href}
        className={className.join(" ")}
        style={props.style}
        onClick={onClick}
      >
        {props.children}
      </Link>;
    }
  }
  return (
    <Button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onclick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
