import React from "react"

import s from './ConnectUs.module.css'

export const ConnectUs = ({
    ...arts
                          }) => {
    // const onClick = function (e) {
    //     e.preventDefault()
    //     console.log("Sending message")
    // }
    
    return (
        <>
            <form className={s.form} action="/">
                <input type="text" placeholder="Ваше Имя" />
                <input type="email" placeholder="Электронная почта" />
                <textarea name="note" id="" cols="30" rows="10" placeholder="Сообщение"></textarea>
            </form>
            <button {...arts}
                type="submit" onClick={(e) => {
                e.preventDefault()
                console.log('Sending message')}}>
                Отправить
            </button>
        </>
    )
}
