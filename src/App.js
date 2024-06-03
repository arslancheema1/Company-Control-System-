import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './navbar/signup';
import Login from './navbar/signin';
import Navbar from './navbar/navbar';
import Services from './navbar/services';
import About from './navbar/about';
import Contact from './navbar/contact';
import Bags from './navbar/bags';
import Arr from './navbar/arr';

function App() {
 return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/men' element={<Services/>}/>
    <Route path='/women' element={<About/>}/>
    <Route path='/fragrances' element={<Contact/>}/>
    <Route path='/signin' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/bags' element={<Bags/>}/>
    <Route path='/arrival' element={<Arr/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
