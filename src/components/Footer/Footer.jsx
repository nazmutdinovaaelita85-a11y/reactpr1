import s from './Footer.module.css'
import logo from '../../assets/logo.png'



export function Footer() {
    return (
        <div className={s.footer_block}>
            <div className={s.container}>
                <div className={s.fot_first}>
                    <div className={s.fot_ver}>
                        <img src={logo} alt="" />
                        <p>Элегантность в каждой нити</p>
                    </div>
                    <p>© Назмутдинова Аэлита Реналевна 2026</p>
                </div>

                <div className={s.fot_info}>
                    <h3>Навигация</h3>
                    <div className={s.fot_text}>
                        <p>Главная</p>
                        <p>Каталог</p>
                        <p>Корзина</p>
                    </div>
                </div>

                <div className={s.fot_info}>
                    <h3>Контакты</h3>
                    <div className={s.fot_text}>
                        <p>Тел: +7(917)894-95-88</p>
                        <p>E-mail: info@silk.ru </p>
                    </div>
                </div>
            </div>


        </div>

    )
}