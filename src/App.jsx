import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Navbar from './components/navbar/Navbar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const App = () => {
  return (
    <div style={{ backgroundColor: '#ff6d6d' }}>
      <Navbar />
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={4}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Intro />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={2}  />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
      <About />
        </ParallaxLayer>
      </Parallax>
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
