import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Project from "./components/product/Product";
import Navbar from './components/navbar/Navbar'
import './App.css'

const App = () => {
  return (
    <div class="font-sans bg-white">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
