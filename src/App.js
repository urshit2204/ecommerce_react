import './App.css';
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import NewsLetter from './Components/NewsLetter.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Components/Products.jsx';
import Home from './Components/Home.jsx';
import Productdisplay from './Components/Productdisplay.jsx'
import About from './Components/About.jsx';
import Terms from './Components/Terms.jsx';
import Faq from './Components/Faq.jsx';
import Cart from './Components/Cart.jsx'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/About' element={<About />} />
        <Route path='/Terms' element={<Terms />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <Routes>
      <Route path='/Productdisplay' element={<Productdisplay />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </BrowserRouter>
    </>

  )
}

export default App;
