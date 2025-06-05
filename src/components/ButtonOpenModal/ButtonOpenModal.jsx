import React, {useState} from 'react'
import s from './ButtonOpenModal.module.css'
import { Modal } from "../Modal/Modal.jsx"

export const ButtonOpenModal = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <button onClick={() => setModalActive(true)} className={s.button}>Открыть</button>
            <Modal active={modalActive} setActive={setModalActive}>
                <form action="" method="POST" className="modalForm">
                    <input type="text" required className="modalInput" placeholder="Введите ваше имя"/>
                    <textarea className="modalTextarea" required placeholder="Сообщение"/>
                    <input type="e-mail" required className="modalInput" placeholder="e-mail"/>
                    <button onClick={e => e.preventDefault()}>Отправить</button>
                </form>
            </Modal>
        </>
    )
}
