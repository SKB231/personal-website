import React, { Component } from "react";
import headShotImg from "./headShot.jpg";

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
          I'm a junior at Georgia Tech, College of Computing. I am working
          towards my B.S. Computer Science. My threads are the Intelligence and
          Information Internetworks.
          <p>
            {"\n\n"}
            I'm a full stack web developer, who mostly uses the MERN stack, but
            I'm also interested in learning about machine learning and neural
            networks, specially generative models like the encoder-decoder
            models.
          </p>
        </p>

        <h2 className="formatUnderline indent">Why CS? 🔍❓</h2>
        <p className="indent2">
          For many "Hello World" may have been their first program. But for me,
          it was a Unity Script of a ball moving in one direction. I love to
          code, because of the freedom of things we can create with it. Along with this I
          love to learn things I find challenging. Ocassionally I also make
          games in UE4 for fun. I was a developer at
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
