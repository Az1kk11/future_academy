import React, { useEffect, useMemo, useState } from 'react'
import CountUp from 'react-countup'
import './style.css'

// images
import Group837 from '../../image/widget/Group 837.svg'
import Union from '../../image/widget/Union.svg'
import Vector137 from '../../image/widget/Vector 137.svg'
import Vector183 from '../../image/widget/Vector 183.svg'
import Vector184 from '../../image/widget/Vector 184.svg'
import Vector from '../../image/widget/Vector.svg'
import centerImage from '../../image/widget/center-image.jpg'
import children from '../../image/widget/children.png'
import cova from '../../image/widget/cova.svg'
import cross from '../../image/widget/cross.svg'
import diagram from '../../image/widget/diagram.png'
import familye from '../../image/widget/family.png'
import monitor from '../../image/widget/monitor.png'
import newspaper from '../../image/widget/newspaper.png'
import play from '../../image/widget/play.svg'
import transparent from '../../image/widget/transparent.svg'
import young from '../../image/widget/young.png'

const detyArr = [
    { category: 'dety', title: "Robototexnika", link: '#' },
    { category: 'dety', title: "Oyın jaratıw", link: '#' },
    { category: 'dety', title: "Scratch", link: '#' },
    { category: 'dety', title: "Arduino", link: '#' },
    { category: 'dety', title: "Lego Wedo", link: '#' },
    { category: 'dety', title: "Python Tynker", link: '#' },
    { category: 'dety', title: "Unity", link: '#' },
    { category: 'dety', title: "Shaxmat", link: '#' },
    { category: 'dety', title: "Programmalastırıw", link: '#' },
    { category: 'dety', title: "IT English", link: '#' },
    { category: 'dety', title: "Soft skills", link: '#' },

    { category: 'podrostki', title: "Front-end", link: '#' },
    { category: 'podrostki', title: "Back-end", link: '#' },
    { category: 'podrostki', title: "Unity", link: '#' },
    { category: 'podrostki', title: "Grafik Dizayn", link: '#' },
    { category: 'podrostki', title: "Game Development", link: '#' },
    { category: 'podrostki', title: "Python", link: '#' },
    { category: 'podrostki', title: "Android", link: '#' },
    { category: 'podrostki', title: "С++ programmalastırıw", link: '#' },
    { category: 'podrostki', title: "С# programmalastırıw", link: '#' },
    { category: 'podrostki', title: "Kiber qáwipsizlik", link: '#' },
    { category: 'podrostki', title: "Soft skills", link: '#' },

    { category: 'vzrosle', title: "Unity", link: '#' },
    { category: 'vzrosle', title: "Full-stack", link: '#' },
    { category: 'vzrosle', title: "Grafik dizayn", link: '#' },
    { category: 'vzrosle', title: "Social Media Marketing", link: '#' },
    { category: 'vzrosle', title: "Internet Marketing", link: '#' },
    { category: 'vzrosle', title: "Java", link: '#' },
    { category: 'vzrosle', title: "Python", link: '#' },
    { category: 'vzrosle', title: "С# programmalastırıw", link: '#' },
    { category: 'vzrosle', title: "C++ programmalastırıw", link: '#' },
    { category: 'vzrosle', title: "Kiber qáwipsizlik", link: '#' },
    { category: 'vzrosle', title: "Soft skills", link: '#' },
]
type category = {
    category: string,
    title: string,
    link: string,
}

export const Widget: React.FC = () => {
    const [list, setList] = useState<any>([])
    const [selectedCategory, setSelectedCategory] = useState('dety');

    useEffect(() => {
        setList(detyArr);
    }, []);

    const filteredHandle = () => {
        if (!selectedCategory) {
            return list
        }
        return list.filter((item: category) => item.category === selectedCategory)
    }

    let filteredList = useMemo(filteredHandle, [selectedCategory, list])


    return (
        <div className="widget">
            <div className="widget-messege">
                <img src={Union} alt="" className="widget-message__union" />
                <div className="widget-messege__text">
                    <span className="widget-messege__title">Kim bolıwdı qáleysiz?</span>
                    <span className="widget-messege__desc">Ózińizdi tabıw waqtı keldi ! <br /> Ózińizge unaǵan kurstı saylań :)</span>
                    <span className="widget-messege__desc">Áwmet!</span>
                </div>
            </div>
            <img src={cova} alt="" className="widget-messege__cova-img" />

            <>
                <div className="widget-category">
                    <div className={selectedCategory === 'dety' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('dety')}>
                        <img src={children} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Balalar ushın</span>
                            <span className="child-category__text2">8 — 14 jas</span>
                        </div>
                    </div>
                    <div className={selectedCategory === 'podrostki' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('podrostki')}>
                        <img src={young} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Óspirimler ushın</span>
                            <span className="child-category__text2">14 — 18 jas</span>
                        </div>
                    </div>
                    <div className={selectedCategory === 'vzrosle' ? 'child-category active' : 'child-category'} onClick={() => setSelectedCategory('vzrosle')}>
                        <img src={familye} alt="" className="child-category__img" />
                        <div className="child-category__text">
                            <span className="child-category__text1">Úlkenler ushın</span>
                            <span className="child-category__text2">18 — ∞</span>
                        </div>
                    </div>
                </div>

                <ul className="widget-category__course">
                    {filteredList.map((item: any, idx: number) => (
                        <li className="widget-category__link" key={idx}>{item.title}</li>
                    ))}
                </ul>

            </>

            <div className="widget__gadgets">
                <img src={cross} alt="" className="widget__vector1" />
                <img src={Vector184} alt="" className="widget__vector2" />
                <img src={Vector183} alt="" className="widget__vector3" />
                <img src={Vector} alt="" className="widget__vector4" />

                <div className="widget__center-image">
                    <img src={centerImage} alt="" className="widget__picture" />
                    <img src={transparent} alt="" className="widget__transparent" />
                    <img src={play} alt="" className="widget__play-icon" />
                </div>
                <p className="widget__gadgets-desc">Jańa baslawshılar hám ámeliyatshılar ushın tanıqlı qánigelerdiń bilim hám kónlikpeleri.</p>

                <div className="widget-result1">
                    <span className="number"><CountUp end={600} /></span>
                    <span className="text">Kurslar</span>
                </div>
                <div className="widget-result2">
                    <span className="number"><CountUp end={82} /></span>
                    <span className="text">Mentorlar</span>
                </div>
                <div className="widget-result3">
                    <span className="number"><CountUp end={14795} /></span>
                    <span className="text">Pitkeriwshiler</span>
                </div>
            </div>

            <div className="widget-cards">
            <div className="widget__openDay-card">
                    <div>
                        <span className="widget__openDay-number">25</span>
                        <span className="widget__openDay-month">Noyabr</span>
                    </div>
                    <div>
                        <span className="widget__openDay-title">Ashıq esikler kúni </span>
                        <span className="widget__openDay-desc">Biz sizdi keleshek kásipleri  hám paydalı kónlikpeler <br/> álemine biypul ekskursiyaǵa shaqıramız!</span>
                    </div>
                    <a href="#" className="widget__openDay-link">
                        Baylanıs
                        <img src={Vector137} alt="" />
                    </a>
                </div>
                <div className="widget__study-card">
                    <img src={monitor} alt="" className="widget__study-icon" />
                    <span className="widget__study-title">Oqıw baǵdarlaması</span>
                    <span className="widget__study-desc">Biziń kurslarımız diziminde siz ózińizge jaqqan kásip hám iskerlikti tabıwıńız, jańa zatlardı úyreniwińiz hám maqsetlerińizge erisiwge járdem beretuǵın ámeliy bilimlerdi iyelewińiz múmkin.</span>
                    <a href="#" className="widget__study-link">
                        Kóbirek
                        <img src={Vector137} alt="" />
                    </a>
                </div>
                <div className="widget__news-card">
                    <img src={newspaper} alt="" className="widget__news-icon" />
                    <span className="widget__news-title">Academiya Jańalıqları</span>
                </div>
                <div className="widget__itWorld-card">
                    <img src={diagram} alt="" className="widget__itWorld-icon" />
                    <span className="widget__itWorld-title">IT Álemi</span>
                </div>
                <div className="widget__try-card">
                    <img src={Group837} alt="" className="widget__try-icon" />
                    <div>
                        <span className="widget__try-title">Ózińizdi sınap kóriń!</span>
                        <span className="widget__try-desc">
                        Informaciya texnologiyaları salasında sınaqtan ótiń hám qábiletińizdi bilip alıń! 
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}