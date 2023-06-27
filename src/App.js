import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Products from './Components/Products';
import About from './Components/About';
import Login from './Components/Login';
import Contact from './Components/Contact';
import NoPage from './Components/NoPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import { createContext, useState } from 'react';
import Count from './Context/Count';
import Items from './Context/Items';
import Addtocart from './Context/Addtocart';



function App() {
  const [Add, setAdd] = useState([])
  const [users, setUsers] = useState([])


  return (
    <>

    <BrowserRouter>
    <Addtocart.Provider value=''>
    <Items.Provider value={[users,setUsers]}>
        <Count.Provider value={[Add,setAdd]} >
          <Header/>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="Products" element={<Products />} />
                <Route path="About" element={<About />} />
                <Route path="Contact" element={<Contact/>} />
                <Route path="Contact" element={<Contact/>} />
                <Route path="Login" element={<Login />} />
                <Route path="cart" element={<Cart/>} />
                <Route path="*" element={<NoPage />} />
            </Routes>
          <Footer/>
        </Count.Provider>
        </Items.Provider> 
        </Addtocart.Provider>   
    </BrowserRouter>
    </>
  );
}

export default App;

