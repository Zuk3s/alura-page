import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
