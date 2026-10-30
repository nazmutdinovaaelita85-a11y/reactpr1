import { useState } from "react";
import s from './Categories.module.css';
import { useEffect } from "react";



export function Categories() {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async function load() {
            try {
                const res = await fetch('http://localhost:3000/categories');
                if (!res.ok) {
                    throw new Error(`ошибка ${res.status}: ${res.statusText}`)
                }
                const data = await res.json();
                setCategories(data);


            } catch (error) {
                setError(error.massage);
            }

        })()
    }, [])

    if (error) {
        return <p>Не удалось загрузить категории: {error} </p>
    }

    return (

        <div className={s.categories}>
            <button className={`${s.categoryBtn} ${s.active}`}>
                Все
            </button>

            {
                categories.map(category => <button key={category.id} className={s.categoryBtn}>{category.title}</button>)
            }



        </div>

    )
}

