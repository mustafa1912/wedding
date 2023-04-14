import React from 'react'
import { Route, Routes } from 'react-router-dom'


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



import Footer from './layout/Footer';
import Header from './layout/Header';

import Home from './components/Home';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Price from './components/Price';

function App() {
  const api = 'http://localhost/livewire-master'
  return (
    <React.Fragment>
      <div className="page-wrapper layout-full box-style-none">
        <Header api={api} />
        <Routes>
          <Route path='' element={<Home api={api} />}></Route>
          <Route path='/contact' element={<Contact api={api} />}></Route>
          <Route path='/portfolio' element={<Portfolio api={api} />}></Route>
          <Route path='/about' element={<About api={api} />}></Route>
          <Route path='/price' element={<Price api={api} />}></Route>
        </Routes>
        <Footer api={api} />
      </div>
    </React.Fragment>
  )
}

export default App