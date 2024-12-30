import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Catalog from "./routes/ClientHome/Catalog";
import ProductDetails from "./routes/ClientHome/ProductDetails";
import ClienteHome from "./routes/ClientHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota para o redirecionamento de qualquer URL não encontrada para a página inicial */}
        <Route path="*" element={<Navigate to="/" />} />

        {/* Rota principal para a página ClienteHome com rotas filhas */}
        <Route path="/" element={<ClienteHome />}>
          {/* Rota para o catálogo, tanto para "/" quanto para "/catalog" */}
          <Route index element={<Catalog />} />
          <Route path="catalog" element={<Catalog />} />
          
          {/* Rota para os detalhes do produto com o parâmetro productId */}
          <Route path="product-details/:productId" element={<ProductDetails />} />
        </Route>

        {/* Aqui a segunda rota '*' não é necessária. O redirecionamento já é feito na primeira */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
