import s from './ProductPage.module.css'
import { useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';


export function ProductPage() {

    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});
    const [error, setError] = useState(null);
    const { id } = useParams()
    // const product = products.find(product => product.id == id)
    // const category = categories.find(category => category.id == product.categoryId)

    useEffect(() => {
        (async function load() {
            try {


                const prodres = await fetch('http://localhost:3000/products/' + id);
                // обрабат ошибк
                if (!prodres.ok) {
                    throw new Error(`ошибка ${prodres.status}: ${prodres.statusText}`)
                }
                const productFromServer = await prodres.json();
                setProduct(productFromServer);


                const cutres = await fetch('http://localhost:3000/categories/' + productFromServer.categoryId);
                // должны обработку ошибок сделать
                if (!cutres.ok) {
                    throw new Error(`ошибка ${cutres.status}: ${cutres.statusText}`)
                }
                const categoryFromServer = await cutres.json();
                setCategory(categoryFromServer);

            } catch (error) {
                setError(error.message);
            }

        })()
    }, [id]);


    if (error) {
        return <p>Не удалось загрузить продукт: {error} </p>
    }



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