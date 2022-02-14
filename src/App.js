import "./styles/index.scss";
import Header from "./components/header";
import MainPageBody from "./components/mainPageBody";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
    </div>
  );
}

export default App;
