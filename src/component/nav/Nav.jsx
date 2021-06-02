import "./Nav.css";

import React from "react";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="title">À la galerie: se promener dans votre pièce</div>
      <div className="subtitle">
        par unsplash.com&nbsp;
        <p>
          la source de ce site web (rediriger à&nbsp;
          <a
            href="https://github.com/olcw78/a-la-galerie"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          )
        </p>
      </div>
    </div>
  );
};

export default Nav;
