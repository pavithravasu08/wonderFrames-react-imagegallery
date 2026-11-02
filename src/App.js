import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import images from './data/images';



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery images={images} />
      <Footer />
    </div>
  );
}

export default App;