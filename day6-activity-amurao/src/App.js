
import './App.css';
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Header from './Header';
function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Intro />
      <About />
      <Services />
      <Projects />
    </div>
  );
}

export default App;
