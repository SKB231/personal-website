import "./styles/index.scss";
import Header from "./components/header";
import MainPageBody from "./components/mainPageBody";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import { useState } from "react";

function App() {
  const [currentPage, changePage] = useState("mainPageBody");
  console.log("THE Current page is " + currentPage);
  return (
    <div className="App">
      <Header changePage={changePage} currentPage={currentPage} />
      {currentPage === "mainPageBody" && <MainPageBody changePage={changePage}/>}
      {currentPage === "projects" && <Projects />}
      {currentPage === "AboutMe" && <AboutMe />}
    </div>
  );
}

export default App;
