import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Labs from'./Labs/Labs.tsx';
import Kanbas from './Kanbas/index.tsx';
export default function App() {
  return (
    <HashRouter>
    <div>
    <Link to= "/Labs">Labs</Link> | <Link to = "/Kanbas">Kanbas</Link> | <Link to = "https://github.com/underdogRoy/kanbas-react-web-app-2024Fall">Code Source</Link>

      <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>


    </div>
    </HashRouter>
  );
}


