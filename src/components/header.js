import React, { Component, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="content">
        <h2 className="logo">Navbar</h2>
        <nav className={`nav ${menuOpen && "openMenu"}`}>
          <ul>
            <li>
              <a href="#">Page One</a>
            </li>
            <li>
              <a href="#">Page Two</a>
            </li>
            <li>
              <a href="#">Page Three</a>
            </li>
          </ul>
        </nav>
        <div
          className="content_toggle"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          {!menuOpen ? <BiMenuAltRight /> : <AiOutlineClose />}
        </div>
      </div>
    </header>
  );
}

export default Header;
