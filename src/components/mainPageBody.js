import React, { Component, useState } from "react";

function mainPageBody() {
  return (
    <div className="container cdark cflexCol">
      <h1 className="fLight monospace sizeL">
        Hi! I am <span className="fLight monospace sizeL dynamic">Krishna</span>
      </h1>

      <h1 className="fLight monospace sizeL biggerText">I do Full Stack</h1>

      <div className="buttonsContainer">
        <a>Projects</a>
        <a href="/Resume.pdf" target="_blank">
          Resume
        </a>
      </div>
    </div>
  );
}

export default mainPageBody;
