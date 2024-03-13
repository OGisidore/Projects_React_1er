import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ChatBox from './components/ChatBox/ChatBox';

function App() {
  return (
    <BrowserRouter>
    
   
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reader/:slug' element={<ChatBox/>}/>
        {/* <Route path ='/*' element={<ErrorPage/>}/> */}


       

      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
