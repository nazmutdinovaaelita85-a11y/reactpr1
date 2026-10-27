import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
import { products } from '../../assets/data'


export function Catalog() {
    return (

        <div className={s.container}>

            <div className={s.productsGrid}>
                {
                    products.map((product) => <CatalogCard key={product.id} product={product} />)
                }

            </div>
        </div>



    )
}