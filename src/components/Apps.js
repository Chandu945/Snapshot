import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";

const Apps = () =>{
     return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Apps