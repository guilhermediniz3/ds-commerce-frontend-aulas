import './style.css'

import HeaderCliente from '../../components/HeaderClient'
import SearchBar from '../../components/SearchBar';
import CatalogCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "TV 50 polegadas",
    imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletronicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"

        }

    ]

}


export default function Catalog() {
    return (
        <>
            <HeaderCliente />

            <main>
                <section id="catalog-section" className="dsc-container">

                    <SearchBar />
                    <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />
                        <CatalogCard product ={product} />

                    </div>
                    <ButtonNextPage />
                </section>
            </main>
        </>
    );
}