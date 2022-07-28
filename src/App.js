import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './components/catalog';
import About from './components/about';
import Home from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Cart from './components/cart';
import Admin from './components/admin';
import GlobalState from './context/globalState';

function App() {
  return (
      <div className="App">
        <GlobalState>
          <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/catalog' element={<Catalog/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/footer' element={<Footer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/admin' element={<Admin/>}/>
            </Routes>
          </BrowserRouter>
        </GlobalState>  
      </div>
  );
}

export default App;
