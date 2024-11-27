import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './Components/NavBar.js';
import {Banner} from './Components/Banner.js';
import {Skills} from './Components/Skills.js';
import {Projects} from './Components/Projects.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
