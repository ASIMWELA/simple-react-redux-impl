import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/product.list";
import ProductDetails from "./pages/product.details";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path="/:productId" exact element={<ProductDetails />} />
        <Route>Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
