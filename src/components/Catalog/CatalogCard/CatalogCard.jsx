
import s from '../CatalogCard/CatalogCard.module.css';

import { Link } from 'react-router';



export function CatalogCard({product}) {
    return (

        <div className={s.productCard}>
            <div className={s.productImage}>
                <img src={product.image} alt="Шёлковый платок" />
            </div>
            <div className={s.productInfo}>
                <h3 className={s.productName}>{product.title}</h3>
                <p className={s.productDescription}>
                    {product.description}
                </p>
                <div className={s.productFooter}>
                    <span className={s.productPrice}>{product.price} ₽</span>

                    <Link to={`/product/${product.id}`}>
                        <button className={s.addToCartBtn}>В корзину</button>

                    </Link>
                </div>
            </div>
        </div>


    )
}