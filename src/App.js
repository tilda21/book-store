import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const fetchBooks = () => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
  }

  useEffect(fetchBooks, [])
  console.log("books: ", books);
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
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
            <Booklist/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
