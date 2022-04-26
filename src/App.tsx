import React from 'react';
import './App.css';
import { Routes,Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from './screen/homepage';
import Contactus from './screen/contactus';
import Mint from './screen/mint';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="contactus" element={<Contactus />}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="mint" element={<Mint/>}/>
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
/*
/*<Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/mint" element={<Mint />} />
      </Routes>*/