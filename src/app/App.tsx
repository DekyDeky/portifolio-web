import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import React from 'react';
import Cabecalho from '../components/cabecalho/cabecalho';
import Home from './routes/home';
import Projetos from './routes/projetos';
import Blog from './routes/blog';
import SobreMim from './routes/sobreMim';


function App() {
  return (
    <Router>
      <Cabecalho/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projetos" element={<Projetos/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/SobreMim" element={<SobreMim/>}/>
      </Routes>
    </Router>
  );
}

export default App;
