
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router"
import { Link } from "react-router"
import Main  from "../../pages/MainBody.jsx"
import { Gallery } from "../../pages/Gallery.jsx"
import { Address } from "../../pages/Address.jsx"
import { Connect } from "../../pages/Connect.jsx"
import { Review } from "../../pages/Review.jsx";

import s from './Header.module.css'

const Header = () => {
    return (
        <Router>
            <div className={s.header}>
                <nav className={s.nav}>
                    <Link to='/'  className={s.item}>
                        Главная
                    </Link>
                    <Link to='/gallery' className={s.item}>
                        Галерея
                    </Link>
                    <Link to='/address' className={s.item}>
                        Адрес
                    </Link>
                    <Link to='/connect' className={s.item}>
                        Связаться с нами
                    </Link>
                    <Link to='/review' className={s.item}>
                        Отзывы
                    </Link>
                </nav>
            </div>
            
            <Routes>
                <Route path='/'  element={<Main />}></Route>
                <Route path='/gallery'  element={<Gallery />}></Route>
                <Route path='/address'  element={<Address />}></Route>
                <Route path='/connect'  element={<Connect />}></Route>
                <Route path='/review'  element={<Review />}></Route>
                
            </Routes>
        </Router>
    )
}

export default Header
