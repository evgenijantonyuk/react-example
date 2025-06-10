import React from "react"

import s from './SliderTitle.module.css'

export const SliderTitle = ({ children }) => {
    return (
        <>
            <h1 className={s.gradientTitle}>{ children }</h1>
        </>
    )
}
