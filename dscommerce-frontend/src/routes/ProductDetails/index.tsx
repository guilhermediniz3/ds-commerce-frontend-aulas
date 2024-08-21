import './styless.css'
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderCliente from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";


export default function ProductDetails(){
    return(
        <>
        <HeaderCliente />
        <main>
          <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard/>
   
            <div className="dsc-btn-page-container">
             <ButtonPrimary />
             <ButtonInverse/>
            </div>
          </section>
        </main>
      </>

    );
}