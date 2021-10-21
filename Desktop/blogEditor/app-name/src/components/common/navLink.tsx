import React from "react";
import { NavLink as Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, ...rest }) => {
  return (
    <Link
      exact
      {...rest}
      activeStyle={{
        fontWeight: "bold",
        color: "red",
      }}
      to={to}
    >
      {children}
    </Link>
  );
};

export default NavLink;
