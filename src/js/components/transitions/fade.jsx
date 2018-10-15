import React from "react";
import { CSSTransition } from "react-transition-group";

export const FadeTransition = ({ children, className, ...props }) => (
  <CSSTransition {...props} timeout={300} classNames={className}>
    {children}
  </CSSTransition>
);

export default FadeTransition;
