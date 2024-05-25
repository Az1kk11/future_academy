import React from 'react'
import './style.css'

import sdf1 from '../../image/career/1.svg'
import sdf2 from '../../image/career/2.svg'
import sdf3 from '../../image/career/3.svg'
import Avito from '../../image/career/Avito.png'
import MaskGroup1 from '../../image/career/Mask Group (1).png'
import MaskGroup2 from '../../image/career/Mask Group (2).png'
import MaskGroup from '../../image/career/Mask Group.png'
import Union from '../../image/career/Union.svg'
import Vector1 from '../../image/career/Vector1.svg'
import Vector2 from '../../image/career/Vector2.svg'
import alfabank from '../../image/career/alfabank.png'
import cross from '../../image/career/cross.svg'
import employmentCros from '../../image/career/employment-cros.svg'
import employmentRound from '../../image/career/employment-round.svg'
import employmentTriangle from '../../image/career/employment-triangle.svg'
import miniCross from '../../image/career/mini-cross.svg'
import previewCross from '../../image/career/preview-cross.svg'
import previewRound from '../../image/career/preview-round.svg'
import previewTriangle from '../../image/career/preview-triangle.svg'
import round from '../../image/career/round.svg'
import tinkof from '../../image/career/tinkof.png'
import triange from '../../image/career/triange.svg'
import vk from '../../image/career/vk.png'
import sova from '../../image/career/Сова-01 1.svg'

export const Career: React.FC = () => {
    return (
        <div className="career">
            <div className="career__holder">
                <span className="career__holder-title">Future Academy</span>
                <span className="career__holder-subtitle">Karera qurıwda biz sizge járdem beremiz</span>
                <img src={cross} alt="" className="career__holder-icon1" />
                <img src={round} alt="" className="career__holder-icon2" />
                <img src={miniCross} alt="" className="career__holder-icon3" />
                <img src={Vector1} alt="" className="career__holder-icon4" />
                <img src={triange} alt="" className="career__holder-icon5" />
                <img src={Vector2} alt="" className="career__holder-icon6" />
                <img src={MaskGroup} alt="" className="career__holder-picture1" />
                <img src={MaskGroup1} alt="" className="career__holder-picture2" />
                <img src={MaskGroup2} alt="" className="career__holder-picture3" />
                <a href="reypnazarovanazira@gmail.com" className="career__holder-link">Jumısqa jaylasıw haqqında soraw beriw</a>
            </div>

            <div className="career__wrapper">
                <div>
                    <img src={Union} alt="" className="career__union" />
                    <span className="career__message">Biz benen siz árman etken jumıstı tabasız.</span>
                    <img src={sova} alt="" className="career__cova" />
                </div>
                <div className="career__preview">
                    <div className="career__preview-box">
                        <img src={previewCross} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Maqset</span>
                        <span className="career__preview-text">Sizdiń maqsetińiz qanshelli úlken bolmasın biziń Akademiyamız sizge maqsetlerińizge erisiwge járdem beredi.</span>
                    </div>
                    <div className="career__preview-box">
                        <img src={previewRound} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Reje</span>
                        <span className="career__preview-text">Biziń Akademiyamız benen maqsetińizge rejeler dúziń hám olardı orınlań.</span>
                    </div>
                    <div className="career__preview-box">
                        <img src={previewTriangle} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Isenim</span>
                        <span className="career__preview-text">Biz benen ájáyip keleshek qurıwıńızǵa, hámmesi qolıńızdan keliwine isenemiz.</span>
                    </div>
                </div>

                <div className="career__tagline">
                    <div className="career__tagline-title">Ne ushın siz Future Academy menen álbette jumıs tabasız ?</div>

                    <div className="career__tagline-desc">Future Academy óz pitkeriwshilerin tabıslı jumısqa jaylastırıwdı kepilleydi. Future Academy jetekshi IT qánigeleri tárepinen islep shıǵılǵan kurslardı usınıs etedi. Akademiya oqıtıwshıları iri kompaniyalarda úlken tájiriybege iye hám óz bilim hám kónlikpelerin bólisiwge tayın. Oqıw jobası turaqlı túrde eń sońǵı tendenciyalar hám bazar talaplarına say túrde jańalanadı. Future Academy pitkeriwshileri aktiv hám qollap-quwatlaytuǵın jámiyetshiliktiń bir bólegi esaplanadı. Bul sizge tájiriybe hám bilim almasıw, máslahát hám usınıslar alıw, sonıń menen birge, jańa doslar hám hamfikrlarni tabıw imkaniyatın beredi.</div>

                    <div className="career__tagline-result">
                        <div className="career__tagline-vacancy">
                            <span className="career__vacancy-number">120</span>
                            <span className="career__vacancy-text">Vakansiyalar</span>
                        </div>
                        <div className="career__tagline-employed">
                            <span className="career__employed-number">82%</span>
                            <span className="career__employed-text">Jumıs penen támiyinlengen oqıwshılar</span>
                        </div>
                        <div className="career__tagline-salary">
                            <span className="career__salary-number">$1500-2000</span>
                            <span className="career__salary-text">Pitkeriwshilerimizdiń ortasha tabısı</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="career__employment">
                <span className="career__employment-title">Jumısqa jaylasıw jolları</span>
                <img src={sdf1} alt="" className="career__employment-icon1" />
                <img src={sdf2} alt="" className="career__employment-icon2" />
                <img src={sdf3} alt="" className="career__employment-icon3" />

                <div className="career__employment-col">
                    <div className="career__employment-box">
                        <img src={employmentCros} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">IT tarawında tańlaǵan jónelisińiz ushın zárúr bolǵan tiykarǵı programmalastırıw tilleri, texnologiyaları hám quralların úyreniwge itibar qaratıń. Joybarlarda qatnasıw hám tapsırmalardı orınlaw arqalı ámeliy tájiriybe arttırıwǵa háreket etiń.</span>
                    </div>
                    <div className="career__employment-box">
                        <img src={employmentRound} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">Qábiletińizdi kórsetip beretuǵın ózińizdiń joybarlarıńız ústinde isleń. Joybarlarıńızdı GitHub yamasa basqa platformalarda daǵaza qılıń, sonda potencial jumıs beriwshiler sizdiń jumısıńızdı kóriwleri múmkin.</span>
                    </div>
                    <div className="career__employment-box">
                        <img src={employmentTriangle} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">IT ortalıǵında aktiv qatnasıń, jańa baylanıslar ornatıwıńız hám tarawdıń qánigeleri menen tájiriybe almaslawıńız múmkin bolǵan ushırasıwlar, konferenciyalar hám basqa ilajlarda qatnasıń.</span>
                    </div>
                </div>
                <a href="reypnazarovanazira@gmail.com" className="career__employment-link">Jumısqa jaylasıw haqqında soraw beriw</a>
            </div>

            <div className="career__vacancy">
                <div className="career__vacancy-caption">Aktiv vakansiyalar</div>
                <div className="career__vacancy-cards">
                    <div className="career__vacancy-card vacancy-card1">
                        <span className="career__vacancy-title">Grafik Dizayner</span>
                        <span className="career__vacancy-desc">Talaplar: Adobe Photoshop, Adobe Illustrator, Adobe XD, Affinity Designer, CorelDRAW, Adobe InDesign</span>
                        <span className="career__vacancy-salary">$1000-1500</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card2">
                        <span className="career__vacancy-title">Front-end programmist</span>
                        <span className="career__vacancy-desc">Talaplar: Tailwind CSS, JavaScript (ES6+), React Redux, Next.js, Fetch API </span>
                        <span className="career__vacancy-salary">$1000-1500</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card3">
                        <span className="career__vacancy-title">Back-end programmist</span>
                        <span className="career__vacancy-desc">Talaplar: php/Python, Laravel/Django, MySql, Git, Docker, Fetch API</span>
                        <span className="career__vacancy-salary">$1000-1500</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card4">
                        <span className="career__vacancy-title">Java programmist</span>
                        <span className="career__vacancy-desc">Talaplar: Spring boot 3 (web, data, cloud, cache, aop), Feign, Hibernate 5+, Postgres, Redis, Sql, Git, Kafka, Gradle</span>
                        <span className="career__vacancy-salary">$1000-1500</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card5">
                        <span className="career__vacancy-title">Full Stack programmist</span>
                        <span className="career__vacancy-desc">Talaplar TypeScript, React, MobX, NextJS, Tailwind, Hasura, PostgreSQL, Vercel, Hasura.io, Neon, Bitbucket,</span>
                        <span className="career__vacancy-salary">$2500-3000</span>
                    </div>
                </div>

                <div className="career__vacancy-subtitle">Oqıwshılarımız islep atırǵan kompaniyalar</div>
                <div className="career__company">
                    <div className="career__company-card">
                        <img src={tinkof} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={alfabank} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={vk} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={Avito} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={vk} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={tinkof} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={alfabank} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={vk} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={Avito} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={vk} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={vk} alt="" />
                    </div>
                    <div className="career__company-card">
                        <img src={Avito} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}