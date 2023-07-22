import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Admin from './Components/Admin'
import Adminheader from './Components/Adminheader'
import Cart from './Components/Cart'
import Categories from './Components/Categories'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'
import NoPage from './Components/NoPage'
import Products from './Components/Products'
import Profile from './Components/Profile'
import Search from './Components/Search'
import Addtocart from './Context/Addtocart'
import Count from './Context/Count'
import Items from './Context/Items'
import Searchbar from './Context/Searchbar'
import Searchitem from './Context/Searchitem'

function App() {
  const [Add, setAdd] = useState([])
  const [products, setProducts] = useState([])
  const [searchdata, setSearchdata] = useState([])
  const [users, setUsers] = useState([])
  const token = localStorage.getItem('email')

  return (
    <>
      <section className=''>
        <BrowserRouter>
          <Searchitem.Provider value={[users, setUsers]}>
            <Searchbar.Provider value={[searchdata, setSearchdata]}>
              <Addtocart.Provider value=''>
                <Items.Provider value={[products, setProducts]}>
                  <Count.Provider value={[Add, setAdd]}>
                    {(() => {
                      if (token === 'test@gmail.com') {
                        return (
                          <>
                            <Adminheader />
                            <Header />
                            <Routes>
                              <Route path='/' element={<Home />} />
                              <Route path='Products' element={<Products />} />
                              <Route path='About' element={<About />} />
                              <Route path='Contact' element={<Contact />} />
                              <Route path='Login' element={<Login />} />
                              <Route path='cart' element={<Cart />} />
                              <Route path='Admin' element={<Admin />} />
                              <Route path='Profile' element={<Profile />} />
                              <Route
                                path='Categories'
                                element={<Categories />}
                              />
                              <Route path='Search' element={<Search />} />
                              <Route path='*' element={<NoPage />} />
                            </Routes>
                          </>
                        )
                      } else {
                        return (
                          <>
                            <Header />
                            <Routes>
                              <Route path='/' element={<Home />} />
                              <Route path='Products' element={<Products />} />
                              <Route path='About' element={<About />} />
                              <Route path='Contact' element={<Contact />} />
                              <Route path='Contact' element={<Contact />} />
                              <Route path='Login' element={<Login />} />
                              <Route path='cart' element={<Cart />} />
                              {/* <Route path='Admin' element={<Admin />} /> */}
                              {/* <Route path='Profile' element={<Profile />} /> */}
                              <Route
                                path='Categories'
                                element={<Categories />}
                              />
                              <Route path='Search' element={<Search />} />
                              <Route path='*' element={<NoPage />} />
                            </Routes>
                          </>
                        )
                      }
                    })()}

                    <Footer />
                  </Count.Provider>
                </Items.Provider>
              </Addtocart.Provider>
            </Searchbar.Provider>
          </Searchitem.Provider>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
