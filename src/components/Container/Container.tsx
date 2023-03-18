import React from "react";
import "./Container.css";

export const Container = ({ children }: any) => {
  return <div className="my-container d-flex">{children}</div>;
};
