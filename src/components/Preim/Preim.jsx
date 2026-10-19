import s from './Preim.module.css'
import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
export function Preim() {
    return (
        <div className={s.container}>

            <div className={s.preim_block}>
                <div className={s.preim_zag}>
                    <img src={i1} alt="" />
                    <h3>Вне времени и трендов</h3>
                </div>
                <p>Классическая элегантность, которая всегда актуальна.</p>
            </div>
            <div className={s.preim_block}>
                <div className={s.preim_zag}>
                    <img src={i2} alt="" />
                    <h3>Тихая роскошь</h3>
                </div>
                <p>Утончённость, которой не нужны лишние слова.</p>
            </div>
            <div className={s.preim_block}>
                <div className={s.preim_zag}>
                    <img src={i3} alt="" />
                    <h3>Искусство выбора</h3>
                </div>
                <p> Шёлковые изделия, продуманные до мелочей.</p>
            </div>


        </div>

    )
}