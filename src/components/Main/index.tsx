import React from 'react'
import './style.css'

// images
import Minicross from '../../image/main/Minicross.svg'
import Vector178 from '../../image/main/Vector 178.svg'
import Vector180 from '../../image/main/Vector 180.svg'
import Vector181 from '../../image/main/Vector 181.svg'
import bigcross from '../../image/main/bigcross.svg'
import circle from '../../image/main/circle.svg'
import gradientline from '../../image/main/gradientline.svg'
import points from '../../image/main/points.svg'
import triangle from '../../image/main/triangle.svg'

export const Main: React.FC = () => {
    return (
        <main className="main">
            <div className="point-container">
                <img className="main__points" src={points} alt="" />
                <img src={circle} alt="" className="main__icon1" />
                <img src={triangle} alt="" className="main__icon2" />
                <img src={Minicross} alt="" className="main__icon3" />
                <img src={Vector178} alt="" className="main__icon4" />
                <img src={gradientline} alt="" className="main__icon5" />
                <img src={Vector180} alt="" className="main__icon6" />
                <img src={Vector181} alt="" className="main__icon7" />
                <img src={bigcross} alt="" className="main__icon8" />
                <div className="main__heading-1">Образовательная платформа</div>
                <div className="main__heading-2">ХОД Future Academy</div>
                <span className="main__heading-3">Актуальные знания для новичков и профессионалов</span>
            </div>
        </main>
    )
}