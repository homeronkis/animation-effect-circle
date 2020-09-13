import React from "react";
import Header from "../components/blocks/Header"

const Layout = props => {
  return (
    <div className="container">
      <Header/>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    </div>
  );
}

export default Layout