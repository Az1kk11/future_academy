import React from 'react'
import './style.css'

import Phone from '../../image/activity/Phone.svg'
import shutterstock_1709750299 from '../../image/activity/shutterstock_1709750299.png'
import transparent from '../../image/activity/transparent.png'
import { Main } from '../../components'

export const Activity: React.FC = () => {
    return (
        <>
        <Main/>
        <div className="activity">
            <div className="activity__title">Barlıq is-ilajlar</div>
            <div className="activity__cards">
                <div className="activity__card1">
                    <div>
                        <div className="activity__card1-date">25</div>
                        <div className="activity__card1-month">Noyabr</div>
                    </div>
                    <div>
                        <span className="activity__card1-title">Ashıq esikler kúni</span>
                        <span className="activity__card1-desc">Biz sizdi keleshek kásipleri  hám paydalı kónlikpeler <br/> álemine biypul ekskursiyaǵa shaqıramız!</span>
                        <a href="#" className="activity__card1-link">Baylanıs<img src="./images/link.svg" alt="" /></a>
                    </div>
                </div>
                <div className="activity__card2">
                    <span className="activity__card2-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card2-icon" />
                    <span className="activity__card2-title">Ózbekstanda IT-autsorsing ushın qádemler</span>
                    <span className="activity__card2-desc">Xalıq aralıq sheriklikti bekkemlew maqsetinde IT Park Uzbekistan wákilleri “Advanced Systems Dış Ticaret ve Sanayi Limited Şirketi” (ADSYS) kompaniyasınıń bas menejeri Ferruh Denizaşan menen ózara kelisdi.</span>
                    <span className="activity__card2-date"></span>
                </div>
                <div className="activity__card3">
                    <span className="activity__card3-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card3-icon" />
                    <span className="activity__card3-title">Jaslardı IT-kásiplerine baǵdarlaw</span>
                    <span className="activity__card3-desc">QMU, Matematika Fakulteti «Algoritmlestiriw hám programmalastırıw texnologiyaları» kafedrası baslıǵı Utemuratov Rustam basshılıǵında ushırasıw bolıp ótedi.</span>
                    <span className="activity__card3-date">25-may</span>
                </div>
                <div className="activity__card4">
                    <span className="activity__card4-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card4-icon" />
                    <span className="activity__card4-title">IT áleminde qalay Karera qurıw kerek?</span>
                    <span className="activity__card4-desc">Result University tiykarshısı Vladilen Minin youtube platformasında Karera qurıwdaǵı óz sırları menen bólisedi.</span>
                    <span className="activity__card4-date">29-may</span>
                </div>
                <div className="activity__card5">
                    <img src={shutterstock_1709750299} alt="" className="activity__card5-picture" />
                    <span className="activity__card5-caption">Webinar</span>
                    <span className="activity__card5-title">Python Freelancer kim?</span>
                    <span className="activity__card5-desc">Sber Bank maǵlıwmatlardı izertlew baslıǵı Anastasiya Borneva Python Freelancer kim? hám ol nelerdi biliwi kerek sol haqqındaǵı óziniń bilimlerin Zoom platforması arqalı Online Webinarda siz benen bólisedi.</span>
                    <span className="activity__card5-date">2-iyun</span>
                </div>

                <div className="activity__card6">
                    <img src={transparent} alt="" className="activity__card6-img" />
                    <span className="activity__card6-title">Ashıq Sabaq</span>
                    <span className="activity__card6-desc">Webcademy IT mektebiniń tiykarshısı Yuriy Kyuchevskiy "HTML de birinshi web-sayt" atlı ashıq sabaǵına shaqıradı.</span>
                </div>

                <div className="activity__card7">
                    <span className="activity__card7-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card7-icon" />
                    <span className="activity__card7-title">Professional programmist bolıw ushın 7 qaǵıyda</span>
                    <span className="activity__card7-desc">ulbiTV tiykarshısı Ulbi Timur programmalastırıwdı qalay ózlestiriw hám IT tarawında qalay jumıs tabıw boyınsha youtube platformasında óz bilimleri menen bólisedi.</span>
                    <span className="activity__card7-date">3-iyun</span>
                </div>

                <div className="activity__card8">
                    <span className="activity__card8-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card8-icon" />
                    <span className="activity__card8-title">Front-end Intervyu</span>
                    <span className="activity__card8-desc">3 jıllıq tájiriybege iye Senior Front-end programmist Reactify kanal tiykarshısı Ruslan Kuyanec youtube platforması arqalı shet el kompaniyalarına jumısqa kiriwdegi sáwbet tájiriybeleri menen bólisedi.</span>
                    <span className="activity__card8-date">7-iyun</span>
                </div>

                <div className="activity__card9">
                    <span className="activity__card9-caption">Ushırasıw</span>
                    <img src={Phone} alt="" className="activity__card9-icon" />
                    <span className="activity__card9-title">Development of the targeted Educational program</span>
                    <span className="activity__card9-desc">“Development of the targeted Educational program for Bachelors in Solar Energy in Uzbekistan (DEBSEUz)” xalıq aralıq grant qatnasıwshılarınıń gezektegi onlayn ushırasıwı bolıp ótedi.</span>
                    <span className="activity__card9-date">16 iyun</span>
                </div>
            </div>
        </div>
        </>
    )
}