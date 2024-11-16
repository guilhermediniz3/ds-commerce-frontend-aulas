import './styless.css'
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import {useParams} from 'react-router-dom'; 
import { Link } from 'react-router-dom';

// `product` é uma variável que armazena um objeto conforme a interface `ProductDTO`.
// A interface `ProductDTO` define a estrutura esperada dos dados, mas não é uma classe e não pode ser instanciada.
// A interface s6erve apenas para verificar que os objetos seguem a estrutura definida e para fornecer tipagem estática.



export default function ProductDetails() {
  const params = useParams();
  const product = productService.findById(Number(params.productId));
  return (
   

         <main>
        <section id="product-details-section" className="dsc-container">
         {/* O uso de product &&  é uma forma de garantir que o componente ProductDetailsCard só será renderizado se product não for undefined (ou null, ou qualquer valor false). Essa abordagem é semelhante ao conceito de "Optional" no Java, onde você verifica se um valor está presente antes de usá-lo. */}
          { product &&
          <ProductDetailsCard product={product} />
          }
          <div className="dsc-btn-page-container">
          <ButtonPrimary text="Comprar"/>
         <Link to="/">
         <ButtonInverse text="Início" />
         </Link>
        
          </div>
        </section>
      </main>
   

  );
}