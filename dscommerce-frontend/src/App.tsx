


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClienteHome from "./routes/ClientHome";







function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClienteHome />}>
        <Route index element={<Catalog/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="product-details/:productId" element={<ProductDetails/>}/>
        </Route>
      </Routes>


    </BrowserRouter>


  );
}

export default App
