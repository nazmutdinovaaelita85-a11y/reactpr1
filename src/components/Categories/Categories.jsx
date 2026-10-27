import { categories } from "../../assets/data";
import s from './Categories.module.css';



export function Categories() {
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

