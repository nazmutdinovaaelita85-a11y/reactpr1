import s from './Forma.module.css'


export function Forma() {
    return (
        <div className={s.container}>

            <div className={s.text_block}>
                <h2>Письмо, наполненное элегантностью</h2>
                <p>Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых коллекциях, находить вдохновение и открывать для себя красоту в деталях.</p>
            </div>

            <form action="">
                <input type="email" name="email" placeholder='Введите email' id="" />
                <button type="submit" > Подписаться</button>

            </form>

        </div>

    )
}