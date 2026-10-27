import { Catalog } from "../../components/Catalog/Catalog";
import { Categories } from "../../components/Categories/Categories";
import s from './CatalogPage.module.css';

export function CatalogPage() {
    return (

        <main className={s.main}>
            <h1 className={s.title}>Каталог товаров</h1>

            
            <div className={s.controls}>
                <div className={s.searchContainer}>
                    <input
                        type="text"
                        placeholder="Поиск по названию"
                        className={s.searchInput}
                    />
                    <svg className={s.searchIcon} width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="9" cy="9" r="7" stroke="#9B9B9B" strokeWidth="1.5" />
                        <path d="M14 14L17 17" stroke="#9B9B9B" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <select className={s.sortSelect}>
                    <option>Сортировка по цене</option>
                </select>
            </div>

            
          
            <Categories/>

            <Catalog/>


        </main >
    )
}