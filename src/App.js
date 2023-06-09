
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner} from "./components/Banner";
import { Skills} from "./components/Skills";
import { Projects} from "./components/Projects";
import { Experience} from "./components/Experience";
import { Doodles} from "./components/Doodles";
import { Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Doodles />
      <Footer />
    </div>
  );
}

export default App;