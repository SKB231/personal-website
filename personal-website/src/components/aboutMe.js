import React, { Component } from "react";
import headShotImg from "./HeadShot.jpg";

function aboutMe() {
  return (
    <div className="container clight cflexRow">
      <div className="ImageBox">
        <img src={headShotImg}></img>
      </div>
      <div className="TextArea">
        <h1>Hi 👋</h1>
        <h2 className="formatUnderline indent">Who am I ? 📚</h2>
        <p className="indent2">
          I'm a sophomore at Georgia Tech, College of Computing. I am working
          towards my B.S. Computer Science. My threads are the Intelligence and
          Information Internetworks.
          <p>
            {"\n\n"}
            I'm a full stack web developer, who mostly uses the MERN stack, but
            I'm also interested in learning about Google Cloud. I'm currently
            working on the
            <a
              href="https://www.cloudskillsboost.google/public_profiles/a4e698cd-8b90-433b-b10f-4db3176071cb"
              target="_blank"
            >
              {" "}
              Google Cloud: Cloud Enginner Learning Path
            </a>
          </p>
        </p>

        <h2 className="formatUnderline indent">Who am I really? 🔍❓</h2>
        <p className="indent2">
          I love to code, because of the things we can create with it. Along
          with this I love to learn things I find challenging, like probability!
          Ocassionally I also make games in UE4 for fun. I was a developer at
          <a target="_blank" href="https://twitter.com/InfimaGames">
            {" "}
            INFIMA Games
          </a>
          , where I implemented some features such as networking in their Low
          Poly Shooter Pack for UE4.
        </p>
      </div>
    </div>
  );
}

export default aboutMe;
