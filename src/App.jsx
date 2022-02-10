import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Project from "./components/product/Product";
import Navbar from './components/navbar/Navbar'
import ProductList from './components/productList/ProductList'
import Footer from './components/footer/Footer'
import './App.css'

const App = () => {
  return (
    <div class="font-sans bg-white">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <ProductList />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
