import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductListing from "./component/ProductListing";
import Header from './components/Header'
import "./App.css";
import ProductComponent from "./components/ProductComponent";
import ProductDetails from "./components/ProductDetails";
import ProductListning from "./components/ProductListning";
// import ProductDetails from "./component/ProductDetails";

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductListning/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
      </Routes>
    </Router>
  );
};

export default App;
