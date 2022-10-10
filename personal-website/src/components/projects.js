import React, { Component } from "react";
import usrMan from "./usrMan.png";
import todoList from "./TodoList.png";
import calenderImage from "./calender.png";
import hackMitImg from "./hackMit.png";
import vipImg from "./VIP.png";

function Projects() {
  return (
    <div className="ProjectsContainer">
      <h1>Personal Projects</h1>
      <div className="Projects">
        <div className="ProjectCard card4">
          <div className="ProjectCardContent">
            <div className="ProjectNotes">
              <h3>HackMIT</h3>
              <p>
                Working as a back end developer with a team to make a tutoring
                system for students studying the Digital Signal Processing
                course. Using Node and MongoDB framework to make additional API
                endpoints to allow the front end to access the database.
                Additionally working on setting an interface between front end
                and a Model Coordinating and communicating with other teams and
                team members by having weekly team meetings and updating the
                Trello Board.
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer">
                  <a
                    href="https://www.vip.gatech.edu/teams/vp4"
                    target="_blank"
                  >
                    Project Page
                  </a>
                </div>
                <div className="ButtonsContainer">
                  <a
                    href="https://www.youtube.com/watch?v=jqB3r_16WqA"
                    target="_blank"
                  >
                    Demo Video
                  </a>
                </div>
              </div>
            </div>
            <div className="ProjectImage">
              <img src={hackMitImg}></img>
            </div>
          </div>
        </div>
        <div className="ProjectCard card5">
          <div className="ProjectCardContent">
            <div className="ProjectNotes">
              <h3>VIP ITS</h3>
              <p>
                Working as a back end developer with a team to make a tutoring
                system for students studying the Digital Signal Processing
                course. Using Node and MongoDB framework to make additional API
                endpoints to allow the front end to access the database.
                Additionally working on setting an interface between front end
                and a Model Coordinating and communicating with other teams and
                team members by having weekly team meetings and updating the
                Trello Board.
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer blackLink">
                  <a
                    href="https://www.vip.gatech.edu/teams/vp4"
                    target="_blank"
                  >
                    Project Page
                  </a>
                </div>
              </div>
            </div>
            <div className="ProjectImage">
              <img src={vipImg}></img>
            </div>
          </div>
        </div>
        <div className="ProjectCard card1">
          <div className="ProjectCardContent">
            <div className="ProjectNotes">
              <h3>Simple User Record Manager</h3>
              <p>
                A database management system that I am making to help me get a
                better understanding of CRUD applications. It's made with
                MongoDB, Express, and Node JS. It uses the Passport login system
                for conducting user authentication, which uses JWT.
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer">
                  <a
                    href="https://github.com/SKB231/Simple-User-Database"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://dbmanager-nodejs.herokuapp.com/login"
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="ProjectImage">
              <img src={usrMan}></img>
            </div>
          </div>
        </div>
        <div className="ProjectCard card2">
          <div className="ProjectCardContent">
            <div className="ProjectNotes">
              <h3>Todo List V2</h3>
              <p>
                Front End application created using ReactJS, and deployed in
                github pages. Features include:
                <ul>
                  <li>
                    By default, it allows users to create todo items and give
                    their names
                  </li>
                  <li>Creation of categories</li>
                  <li>
                    Todo items have category, and due dates. Both of which can
                    be changed even after their creation
                  </li>
                  <li>
                    Focus on UI/UX of the software to improve the convinience of
                    its usage.
                  </li>
                </ul>{" "}
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer">
                  <a
                    href="https://github.com/SKB231/Todo-List-v2"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://skb231.github.io/Todo-List-v2/"
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="ProjectImage">
              <img src={todoList}></img>
            </div>
          </div>
        </div>
        <div className="ProjectCard card3">
          <div className="ProjectCardContent">
            <div className="ProjectNotes">
              <h3>Calender</h3>
              <p>
                A JS Calender which contains a calender pointing to the current
                date. Users can add/delete events on a particular day.
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer">
                  <a
                    href="https://github.com/SKB231/Javascript-Calender"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="ProjectImage">
              <img src={calenderImage}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
