import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Special from './components/Special';
import Products from './components/Products';
import Place from './components/Place';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return <>
    <Header/>
    <main className='main'>
        <Hero/>
        <Special/>
    <Products/>
    <Place/>
    <Blog/>
    </main>
    
    <Footer/>

  </>
}

export default App;
