import React, { Component, useState } from "react";
import resumePdf from "./Resume.pdf";

function mainPageBody(props) {
  return (
    <div className="container cdark cflexCol">
      <h1 className="fLight monospace sizeL">
        Hi! I am <span className="fLight monospace sizeL dynamic">Krishna</span>
      </h1>

      <h1 className="fLight monospace sizeL biggerText">I do Full Stack</h1>

      <div className="buttonsContainer">
        <a
          onClick={(evt) => {
            evt.preventDefault();
            props.changePage("projects");
          }}
        >
          Projects
        </a>
        <a href={resumePdf} target="_blank">
          Resume PDF
        </a>
      </div>
    </div>
  );
}

export default mainPageBody;
