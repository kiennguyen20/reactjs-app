import React from "react";
import MenuHeader from "../MenuHeader";
import Header from "./../Header/index";
import Footer from "../Footer/index";
/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
  return (
    <>
      <Header />
      <MenuHeader />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
