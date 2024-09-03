import './App.css';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skill />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
