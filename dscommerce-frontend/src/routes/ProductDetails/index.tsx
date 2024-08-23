import './styless.css'
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderCliente from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';
 
// `product` é uma variável que armazena um objeto conforme a interface `ProductDTO`.
// A interface `ProductDTO` define a estrutura esperada dos dados, mas não é uma classe e não pode ser instanciada.
// A interface s6erve apenas para verificar que os objetos seguem a estrutura definida e para fornecer tipagem estática.


const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "TV 50 polegadas",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories:[
     {
      id:2,
      name: "Eletronicos"
     },
     {
      id:3,
      name: "Computadores"
     },
     {
      id:4,
      name:"Importados"

     }

  ]

}
export default function ProductDetails() {
  return (
    <>
      <HeaderCliente />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />

          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>

  );
}