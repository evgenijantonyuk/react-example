import React from "react"
import { SliderTitle } from "../SliderTitle/SliderTitle.jsx"
import { IconButton } from "../IconButton/IconButton.jsx"
import photo_1 from "../../assets/images/img-1.webp"
import photo_2 from "../../assets/images/img-2.jpg"
import photo_3 from "../../assets/images/img-3.webp"
import photo_4 from "../../assets/images/img-4.webp"
import photo_5 from "../../assets/images/img-5.jpeg"
import photo_6 from "../../assets/images/img-7.webp"
import photo_7 from "../../assets/images/img-8.jpeg"
import photo_8 from "../../assets/images/img-9.jpg"
import photo_9 from "../../assets/images/img-10.webp"

import s from "./Content.module.css"
import { Slider } from "../Slider/Slider.jsx";

export const Content = () => {
    return (
        <div className={s.textContent}>
            <SliderTitle>React Slider</SliderTitle>
            <div className={s.textContentGrid}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet commodi culpa ducimus fugit incidunt
                    nam natus quo.</p>
            </div>
                <Slider>
                    <img src={photo_1} alt="Slide 1"/>
                    <img src={photo_2} alt="Slide 2"/>
                    <img src={photo_3} alt="Slide 3"/>
                    <img src={photo_4} alt="Slide 4"/>
                    <img src={photo_5} alt="Slide 5"/>
                    <img src={photo_6} alt="Slide 6"/>
                    <img src={photo_7} alt="Slide 7"/>
                    <img src={photo_8} alt="Slide 8"/>
                    <img src={photo_9} alt="Slide 9"/>
                </Slider>
        </div>
    )
}
