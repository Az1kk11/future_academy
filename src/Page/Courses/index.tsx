import React, { useEffect, useMemo, useState } from 'react'
import './style.css'

import children from '../../image/courses/children.png'
import family from '../../image/courses/family.png'
import phone from '../../image/courses/phone.png'
import teenager from '../../image/courses/teenager.png'
import { Main } from '../../components'

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

export const Courses: React.FC = () => {
    const [list, setList] = useState<any>([])
    const [selectedCategory, setSelectedCategory] = useState('dety');

    useEffect(() => {
        setList(detyArr);
    }, []);

    const filteredHandle = () => {
        if(!selectedCategory){
            return list
        }
        return list.filter((item: category) => item.category === selectedCategory)
    }

    let filteredList = useMemo(filteredHandle, [selectedCategory, list])

    return (
        <>
        <Main/>
        <main className="courses">
            <h1 className="courses__heading">Kurs baǵdarlamaları</h1>
            <div className="courses__category">
                <div className={selectedCategory === 'dety' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('dety')}>
                    <img src={children} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Balalar ushın</span>
                        <span className="courses__child-desc">8 — 14 jas</span>
                    </div>
                </div>
                <div className={selectedCategory === 'podrostki' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('podrostki')}>
                    <img src={teenager} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Óspirimler ushın</span>
                        <span className="courses__child-desc">14 — 18 jas</span>
                    </div>
                </div>
                <div className={selectedCategory === 'vzrosle' ? 'courses__child active' : 'courses__child'} onClick={() => setSelectedCategory('vzrosle')}>
                    <img src={family} alt="" className="courses__child-icon" />
                    <div className="courses__child-text">
                        <span className="courses__child-title">Úlkenler ushın</span>
                        <span className="courses__child-desc">18 — ∞</span>
                    </div>
                </div>
            </div>

            <span className="courses__title">Jónelisler</span>

            <div className="courses__direction">
                {filteredList.map((item:any, idx:number) => (
                    <span className="courses__link" key={idx}>{item.title}</span>
                ))}
            </div>

            <div className="courses__promo-cards">
                <div className="courses__promo-card courses__card1">
                    <span className="courses__promo-caption">Android</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Mobil qosımsha jaratıw»</span>
                    <span className="courses__promo-desc">Mobil qosımshalar jaratıwshısı adamlar hár kúni smartfonlar, aqıllı saatlar hám planshetlerde paydalanatuǵın qosımshalardı jaratadı.</span>
                    <span className="courses__promo-date">8 ay</span>
                </div>

                <div className="courses__promo-card courses__card2">
                    <span className="courses__promo-caption">Front-end</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Web-saytlar jaratıw»</span>
                    <span className="courses__promo-desc">Front-end jaratıwshısı siz brauzerlerde izlep, kórip hám paydalanıp atırǵan web-saytlardı jaratadı.</span>
                    <span className="courses__promo-date">8 ay</span>
                </div>

                <div className="courses__promo-card courses__card3">
                    <span className="courses__promo-caption">Robototexnika</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Robotlar jaratıw»</span>
                    <span className="courses__promo-desc">Bul kurs balalarıńızdıń intelektual rawajlanıwına kómek beredi hám robotlardı óz qolı menen jaratadı</span>
                    <span className="courses__promo-date">3 ay</span>
                </div>

                <div className="courses__promo-card courses__card4">
                    <span className="courses__promo-caption">Python</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Python tili baǵlamashısı»</span>
                    <span className="courses__promo-desc">Python tili matematikalıq ámeller, jasalma intelekt, web-islep shıǵıw (server tárepinde) ushın qollanıladı.</span>
                    <span className="courses__promo-date">8 ay</span>
                </div>

                <div className="courses__promo-card courses__card5">
                    <span className="courses__promo-caption">C# programmalastırıw</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«C# tili baǵdarlamashısı»</span>
                    <span className="courses__promo-desc">C# programmalastırıw tilinde desktop, mobil qosımshalar hám oyın programmalar (Unity diń skript tárepinde) jaratıladı</span>
                    <span className="courses__promo-date">8-12 ay</span>
                </div>

                <div className="courses__promo-card courses__card6">
                    <span className="courses__promo-caption">Grafik dizayn</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Dizayn islep shıǵıw»</span>
                    <span className="courses__promo-desc">Grafik dizaynerlar logotipler, vizual kontent, shriftler, bannerler hám baspa materiallardı jaratadı.</span>
                    <span className="courses__promo-date">2 ay</span>
                </div>

                <div className="courses__promo-card courses__card7">
                    <span className="courses__promo-caption">Unity</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Unity baǵdarlamashısı»</span>
                    <span className="courses__promo-desc">Unity baǵdarlamashısı oyınlardı jaratadı, sınaqtan ótkeredi, oyınlardı rawajlandıradı hám qollap-quwatlaydı.</span>
                    <span className="courses__promo-date">8 ay</span>
                </div>

                <div className="courses__promo-card courses__card8">
                    <span className="courses__promo-caption">Lego Wedo</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Lego Wedo konstruktorı»</span>
                    <span className="courses__promo-desc">Lego keń pikirlewdi, proporciyalar hám formalardaǵı bilimdi rawajlandırıwǵa járdem beredi.</span>
                    <span className="courses__promo-date">3 ay</span>
                </div>

                <div className="courses__promo-card courses__card9">
                    <span className="courses__promo-caption">C++ programmalastırıw</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«C++ baǵdarlamashısı»</span>
                    <span className="courses__promo-desc">C++ kóbinese operacion sistemalar, real waqıtta qosımshalar sıyaqlı joqarı ónimli qosımshalardı islep shıǵıw ushın isletiledi.</span>
                    <span className="courses__promo-date">8-12 ay</span>
                </div>

                <div className="courses__promo-card courses__card10">
                    <span className="courses__promo-caption">Kiber qáwipsizlik</span>
                    <img src={phone} alt="" className="courses__promo-icon" />
                    <span className="courses__promo-title">«Kiber qáwipsizlik qánigesi»</span>
                    <span className="courses__promo-desc">Kiber qáwipsizlik qánigesi kompyuter sistemaları, tarmaqlar, maǵlıwmatlardıń kiber hújúmlerden qorǵanıwın támiyinlew ushın juwapker bolıp tabıladı.</span>
                    <span className="courses__promo-date">3 ay</span>
                </div>
            </div>
        </main>
        </>
    )
}