import React from "react";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC.tsx";
import Lab1 from "./Lab1/Lab1.tsx";
import Lab2 from "./Lab2/Lab2.tsx";
import Lab3 from "./Lab3/Lab3.tsx";

export default function Labs(){
    return(
    <div> 
      <h1>Ruyi Bao</h1>
      <h1>Section 01</h1>

      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
      
    </div>
    );
}