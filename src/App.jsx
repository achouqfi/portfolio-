import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from './components/navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
