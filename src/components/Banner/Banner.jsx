import s from './Banner.module.css'
import banner from '../../assets/banner.png'

export function Banner(){
    return(
        <div className={s.container}>
            <img src={banner} alt="" />
            <div className={s.banner_text}>
                <div className={s.text_content}>
                    <h1>Элегантность в каждой нити</h1>
                    <p>Продуманные шёлковые изделия, превращающие простоту в нечто особенное.</p>
                </div>
                <button>Перейти в каталог</button>

            </div>

        </div>

    )
}