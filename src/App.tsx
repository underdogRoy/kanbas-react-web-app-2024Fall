import './App.css';
import React from 'react';
import { HashRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Labs from'./Labs/Labs.tsx';
import Kanbas from './Kanbas/index.tsx';
import store from './Kanbas/store.ts';
import { Provider } from "react-redux";
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
    <div>


      <Routes>
          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>


    </div>
    </Provider>
    </HashRouter>
  );
}


