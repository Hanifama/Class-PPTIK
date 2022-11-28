import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Course from './pages/course/Course';
import Contact from './pages/contact/Contact';
import notFound from './pages/notFound/notfound';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter >
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='course' element={<Course/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='notfound' element={<notFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
