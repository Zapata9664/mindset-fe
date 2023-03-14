import React from 'react';
import './App.css';
import { Router } from "./pages/router";
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;
