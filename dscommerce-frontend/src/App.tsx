


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClienteHome from "./routes/ClientHome";







function App() {
  return (

    <BrowserRouter>
      <Routes>
      /* rota pai*/
          <Route path="*"element={<Navigate to="/"/>} />
          /* rota filhas*/
        <Route path="/" element={<ClienteHome />}>
        <Route index element={<Catalog/>}/>
        <Route path="catalog" element={<Catalog/>}/>
        <Route path="product-details/:productId" element={<ProductDetails/>}/>
      
        </Route>
        /* rota irma o mesmo que a rota principal pai, pode receber varias sub rotas*/
        <Route path="*"element={<Navigate to="/"/>} />
      </Routes>


    </BrowserRouter>


  );
}

export default App
