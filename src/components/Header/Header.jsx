import s from './Header.module.css'
import logo from '../../assets/logo.png'

export function Header() {
    return (
        <header className={s.container}>
            <div className={s.header_logo}>
                <img src={logo} alt="" />
            </div>

            <nav>
                <a href="#"> Главная</a>
                <a href="#"> Каталог</a>
                <a href="#"> Корзина</a>
            </nav>


        </header>


    )
}