import s from './Header.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router'
import { PATH } from '../../Routing/Routing'

export function Header() {
    return (
        <header className={s.container}>
            <div className={s.header_logo}>
                <img src={logo} alt="" />
            </div>

            <nav>
                <Link to={PATH.Home} className={s.navLink}>
                    Главная
                </Link>
                <Link to={PATH.Catalog} className={s.navLink}>
                    Каталог
                </Link>
                <Link to={PATH.Cart} className={s.navLink}>
                    Корзина
                </Link>
            </nav>


        </header>


    )
}