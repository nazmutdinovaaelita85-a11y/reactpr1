import s from './ProductPage.module.css'
import platok from '../../assets/platok.png'


import { useParams } from 'react-router';
import { categories, products } from '../../assets/data';


export function ProductPage() {


    const { id } = useParams()
    const product = products.find(product => product.id == id)
    const category = categories.find(category => category.id == product.categoryId)
    return (

        <main className={s.main}>
            <div className={s.productContainer}>

                <div className={s.imageSection}>
                    <div className={s.imageWrapper}>
                        <img src={product.image} alt={product.title} className={s.productImage} />
                    </div>
                </div>


                <div className={s.infoSection}>
                    <span className={s.category}>{category.title}</span>


                    <h1 className={s.productTitle}>{product.title}</h1>

                    <p className={s.productDescription}>
                        {product.description}
                    </p>

                    <div className={s.productPrice}>{product.price}₽</div>


                    <button type="button" className={s.addToCartBtn}> В корзину</button>
                </div>
            </div>
        </main>


    )
}