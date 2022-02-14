import "./styles/index.scss";
import Header from "./components/header";
import MainPageBody from "./components/mainPageBody";
import AboutMe from "./components/aboutMe";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
