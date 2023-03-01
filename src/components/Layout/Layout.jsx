import React from "react";
import Nav from "../Nav/Nav";
import { RouterProvider } from "react-router-dom";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout;
