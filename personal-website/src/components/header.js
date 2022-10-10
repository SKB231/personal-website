import React, { Component, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import resumePDF from "./Resume.pdf";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="content">
        <h2 className="logo">Shreekrishna R Bhat</h2>
        <nav className={`nav ${menuOpen && "openMenu"}`}>
          <ul>
            <li>
              <a
                href="#"
                className={
                  props.currentPage === "mainPageBody" && "CurrentPage"
                }
                onClick={(evt) => {
                  evt.preventDefault();
                  props.changePage("mainPageBody");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={props.currentPage === "AboutMe" && "CurrentPage"}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  props.changePage("AboutMe");
                }}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                className={props.currentPage === "projects" && "CurrentPage"}
                href="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  props.changePage("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="https://github.com/SKB231" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/krishna231/" target="_blank">
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:sbhat97@gatech.edu" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a
                href="https://docs.google.com/document/d/1MYhW3d6izD0Ob_Nah77GciF1do-WYUg7nt1UKUc4UBM/export?format=pdf"
                target="_blank"
              >
                Resume Doc
              </a>
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
