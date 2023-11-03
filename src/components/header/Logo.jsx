import React from "react";

const Logo = ({toggleMenu}) => {
  return (
    <h1 className="header__logo">
      <a href="/">
        <em aria-hidden="true" onClick={toggleMenu}></em>
        <span>webs<br />youtube</span>
      </a>
    </h1>
  );
}

export default Logo;