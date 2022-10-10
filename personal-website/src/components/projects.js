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
                For this project I worked on the chart component of the
                application. It graphed the daily sentiment and stock price
                against time. I did this with the help of the Google Charts API.
                The application itself we used Twitter API to access the top 100
                most recent/relevant tweets about any given person and use
                Google Cloud’s Natural Language Processing API to rank the
                sentiment of each tweet. By aggregating all of these values, we
                gauge how the public feels about a person right now by showing
                the percent of positive and negative tweets, above 0 being
                positive sentiment and below 0 being negative sentiment. We use
                these metrics to compare them with weekly stock quotes, which
                accesses real-time stock values through the AlphaVantage Stock
                Market API.
              </p>
              <div className="ProjectLinks">
                <div className="ButtonsContainer">
                  <a
                    href="https://github.com/aldencheung2/hackMIT"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
                <div className="ButtonsContainer">
                  <a
                    href="https://www.youtube.com/watch?v=znzZnxfEQAc"
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
              <h3>VIP Intelligent tutoring system</h3>
              <p>
                Working as a back end developer with a team to make a tutoring
                system for students studying the Digital Signal Processing
                course. The app itself is built using Android Studio for the
                front end. For the backend, I use Node and MongoDB framework to
                make additional API endpoints to allow the front end to access
                the database. Additionally working on setting an interface
                between front end and a Model Coordinating and communicating
                with other teams and team members by having weekly team meetings
                and updating the Trello Board.
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
