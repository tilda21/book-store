import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='navbar'>
          <ul>
            <div className='nav'>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/favorites">
                <li>Favorites</li>
              </Link>
            </div>
            <div className='nav'>
              <Link to="/cart">
                <li>Cart</li>
              </Link>
              <li>Total: $</li>
            </div>
          </ul>
        </div>
        <Routes>
          <Route path="/favorites" element={
            <React.Fragment>
              <h2>Favorites</h2>
            </React.Fragment>
          }>
          </Route>
          <Route path="/cart" element={
            <React.Fragment>
              <h2>Cart</h2>
            </React.Fragment>
          }>
          </Route>
          <Route path="/" element={
            <React.Fragment>
              <h2>Home</h2>
            </React.Fragment>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
