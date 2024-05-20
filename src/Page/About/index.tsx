import React from 'react'
import './style.css'

import Avito from '../../image/about/Avito.png'
import BigCross from '../../image/about/BigCross.svg'
import CenterImage from '../../image/about/CenterImage.png'
import GradientCross from '../../image/about/GradientCross.svg'
import GradientLine from '../../image/about/GradientLine.svg'
import GradientRound from '../../image/about/GradientRound.svg'
import GradientTriangle from '../../image/about/GradientTriangle.svg'
import Group from '../../image/about/Group.svg'
import PlayButton from '../../image/about/PlayButton.svg'
import Union from '../../image/about/Union.svg'
import Vector198 from '../../image/about/Vector 198.svg'
import Vector1 from '../../image/about/Vector1.svg'
import Vector2 from '../../image/about/Vector2.svg'
import WhiteLine from '../../image/about/WhiteLine.svg'
import alfabank from '../../image/about/alfabank.png'
import avatar1 from '../../image/about/avatar1.png'
import avatar2 from '../../image/about/avatar2.png'
import avatar3 from '../../image/about/avatar3.png'
import avatar4 from '../../image/about/avatar4.png'
import bigTriangle from '../../image/about/big-triangle.svg'
import book from '../../image/about/book.svg'
import budget from '../../image/about/budget.svg'
import children from '../../image/about/children.svg'
import cross from '../../image/about/cross.svg'
import graduatesCircle from '../../image/about/graduates_circle.svg'
import it from '../../image/about/it.svg'
import mobileGame from '../../image/about/mobile-game.svg'
import obtuseangle from '../../image/about/obtuseangle.svg'
import playtime from '../../image/about/playtime.svg'
import points from '../../image/about/points.svg'
import round from '../../image/about/round.svg'
import teacher from '../../image/about/teacher.svg'
import technology from '../../image/about/technology.svg'
import tinkof from '../../image/about/tinkof.png'
import triangle from '../../image/about/triangle.svg'
import unsplash_KIPqvvTOC1s from '../../image/about/unsplash_KIPqvvTOC1s.png'
import vk from '../../image/about/vk.png'
import slova from '../../image/about/Сова-01 1.svg'
import { Main } from '../../components'

import asad from "../../image/about/Asad.jpg"

export const About: React.FC = () => {
    return (
        <>
            <Main />
            <div className="about">
                <div className="about__message">
                    <img src={Union} alt="" className="about__union-icon" />
                    <div className="about__message-text"><p className="about__bold-message">Future Academy'ǵa xosh kelipsiz!</p> Biziń Academiyamız sizge unawı anıq:)</div>
                </div>
                <img src={slova} alt="" className="about__cova" />

                <div className="about__features">
                    <div className="about__feature-card">
                        <img src={cross} alt="" />
                        <span className="about__feature-desc"><p className="about__feature-title">Bul Academiya balalar ushın</p> kompyuterden oyın hám taǵı basqa jaman illetler ushın emes, bálkim úyreniw hám rawajlanıwda paydalanıwdı úyretedi.</span>
                    </div>
                    <div className="about__feature-card">
                        <img src={round} alt="" />
                        <span className="about__feature-desc"><p className="about__feature-title">Bul Academiya óspirimler ushın</p>«Kim bolsam eken?» degen sorawǵa nátiyjeli juwap yaǵnıy, ómirde óz ornın qaysı baǵdarda ekenligin anıqlawda jol kórsetedi.</span>
                    </div>
                    <div className="about__feature-card">
                        <img src={triangle} alt="" />
                        <span className="about__feature-desc"><p className="about__feature-title">Bul Academiya úlkenler ushın </p>hár qanday jasta jańadan baslaw hám ózleriniń eń jaqsı versiyasın jaratıw múmkinshiligine iye bolıwları ushın járdem beredi</span>
                    </div>
                </div>

                <div className="about__thumbnail">
                    <img src={bigTriangle} alt="" className="about__thumbnail-icon1" />
                    <img src={obtuseangle} alt="" className="about__thumbnail-icon2" />
                    <img src={Vector1} alt="" className="about__thumbnail-icon3" />
                    <img src={BigCross} alt="" className="about__thumbnail-icon4" />
                    <img src={CenterImage} alt="" className="about__thumbnail-picture" />
                    <img src={PlayButton} alt="" className="about__thumbnail-icon5" />
                </div>

                <div className="about__found">
                    <div className="about__founded">
                        <img src={unsplash_KIPqvvTOC1s} alt="" className="about__founded-image" />
                        <span className="about__founded-name">Имя Фамилия</span>
                        <span className="about__founded-title">Основатель Академии будущего ХОД</span>
                    </div>
                    <div className="about__desc">
                        «Все началось с любви к шахматам. Я хотел предвидеть ход противника, хотел просчитать его действия, хотел побеждать. Я не стал гением шахмат, но стратег и психолог из меня неплохой» - смеется Иван Иванович. Идея открыть Академию шахмат пришла к нему в 2020 году, когда в период полного локдауна он вдруг вспомнил про хобби - игру в шахматы. Оказалось, что для игры в шахматы сейчас и доска-то не обязательна, все есть в телефоне. Племянник (сын?) Ивана Ивановича большую часть дня проводил в стрелялках на планшете. <br /> «Я показал ему шахматы. К июню он уже был неплохим соперником» - Вскоре идея небольшой академии шахмат превратилась в план создания Академии Будущего, где дети смогут учиться тому, что им нравится, а взрослые попытаются изменить жизнь. Уж очень это сейчас актуально".
                        <br />
                        <span className="about__copyright">Из интервью с основателем Академии Будущего Ивановым И.И.</span>
                    </div>
                </div>

                <div className="about__wrapper">
                    <div className="about__wrapper-title">Biziń ústinligimiz</div>
                    <div className="about__inner">
                        <div className="about__inner-box">
                            <img src={Group} alt="" />
                            <span className="about__inner-text">Trening mazmunı tiyisli bolıwı kerek hám metodologiya jıllar dawamında tastıyıqlanǵan.</span>
                        </div>
                        <div className="about__inner-box">
                            <img src={teacher} alt="" />
                            <span className="about__inner-text">
                                Oqıtıwshı, birinshi náwbette, maman hám xarizmatik shaxs bolıp tabıladı.
                            </span>
                        </div>
                        <div className="about__inner-box">
                            <img src={children} alt="" />
                            <span className="about__inner-text">
                                Tálimdiń rawajlanıw noqatı - bul bala, onıń qızıǵıwshılıqları hám mútajlikleri
                            </span>
                        </div>
                        <div className="about__inner-box">
                            <img src={book} alt="" />
                            <span className="about__inner-text">Rawajlanıw ilmga bolǵan muhabbattan kelip shıǵadı </span>
                        </div>
                        <div className="about__inner-box">
                            <img src={technology} alt="" />
                            <span className="about__inner-text">Texnologiyalar dúnyanı basqaradi hám adamlar bul texnologiyalardı jaratadı </span>
                        </div>
                    </div>
                </div>

                <div className="about__graduates-container">
                    <span className="about__graduates-caption">Mentorlar</span>
                    <img src={points} alt="" className="about__graduates-points" />
                    <img src={obtuseangle} alt="" className="about__graduates-icon1" />
                    <img src={GradientTriangle} alt="" className="about__graduates-icon2" />
                    <img src={GradientLine} alt="" className="about__graduates-icon3" />
                    <img src={WhiteLine} alt="" className="about__graduates-icon4" />
                    <img src={GradientRound} alt="" className="about__graduates-icon5" />
                    <img src={Vector2} alt="" className="about__graduates-icon6" />
                    <img src={GradientCross} alt="" className="about__graduates-icon7" />
                    <div className="about__graduates-cards">
                        <div className="about__graduates-card">
                            <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                            <img src={asad} alt="" className="about__graduates-picture asad" />
                            <span className="about__graduates-name">Asadbek Qogambaev</span>
                            <span className="about__graduates-desc">C# programmalastırıw Kursı Mentorı</span>
                        </div>
                        <div className="about__graduates-card">
                            <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                            <img src={avatar2} alt="" className="about__graduates-picture" />
                            <span className="about__graduates-name">Asem Rajabova</span>
                            <span className="about__graduates-desc">Front-end Kursı Mentorı</span>
                        </div>
                        <div className="about__graduates-card">
                            <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                            <img src={avatar3} alt="" className="about__graduates-picture" />
                            <span className="about__graduates-name">Aziza Saparbaeva</span>
                            <span className="about__graduates-desc">Grafik Dizayn Kursı Mentorı</span>
                        </div>
                        <div className="about__graduates-card">
                            <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                            <img src={avatar4} alt="" className="about__graduates-picture" />
                            <span className="about__graduates-name">Neyla Utepova</span>
                            <span className="about__graduates-desc">Python Kursı Mentorı</span>
                        </div>
                    </div>
                </div>

                <div className="about__programs">
                    <div className="about__programs-title">Baǵdarlamalar</div>
                    <div className="about__container">
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Keńeytirilgen bilim menen támiyinleydi</span>
                        </div>
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Balalardıń jası hám individual qásiyetlerin esapqa alǵan halda dúzilgen</span>
                        </div>
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Avtorlıq hám taǵı basqa soǵan uqsas huqıqlar joq</span>
                        </div>
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Iskerlik hám tájiriybe asırıw tiykarında dúzilgen</span>
                        </div>
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Zamanagóy pedagogikalıq texnologiyalar járdeminde ámelge asırıladı </span>
                        </div>
                        <div className="about__box">
                            <img src={GradientLine} alt="" />
                            <span>Fundamental hám talapqa say</span>
                        </div>
                    </div>
                </div>

                <div className="about__result">
                    <div className="about__courses">
                        <span className="about__courses-number">600</span>
                        <span className="about__courses-title">Kurslar</span>
                    </div>
                    <div className="about__teachers">
                        <span className="about__teachers-number">82</span>
                        <span className="about__teachers-title">Mentorlar</span>
                    </div>
                    <div className="about__graduates">
                        <span className="about__graduates-number">14795</span>
                        <span className="about__graduates-title">Pitkeriwshiler</span>
                    </div>
                </div>

                <div className="about__partners">
                    <div className="about__partners-title">Biziń sheriklerimiz</div>
                    <div className="about__partners-cards">
                        <div className="about__partners-card">
                            <img src={tinkof} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={alfabank} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={vk} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={Avito} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={vk} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={tinkof} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={alfabank} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={vk} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={Avito} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={vk} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={tinkof} alt="" />
                        </div>
                        <div className="about__partners-card">
                            <img src={alfabank} alt="" />
                        </div>
                    </div>
                </div>

                <div className="about__promo">
                    <div className="about__promo-caption">Eger bular siz haqqıńızda bolsa, biz benen baylanısıń!</div>
                    <div className="about__promo-cards">
                        <a href="#" className="about__promo-card promo-link1">
                            <img src={playtime} alt="" className="about__promo-icon" />
                            <span className="about__promo-desc">Perzentim tabıslı bolıwın qáleymen</span>
                        </a>
                        <a href="#" className="about__promo-card promo-link2">
                            <img src={budget} alt="" className="about__promo-icon" />
                            <span className="about__promo-desc">Kóp pul tabıwdı qáleymen</span>
                        </a>
                        <a href="#" className="about__promo-card promo-link3">
                            <img src={mobileGame} alt="" className="about__promo-icon" />
                            <span className="about__promo-desc">Perzentim gadjeti qolınan túsirmeydi.</span>
                        </a>
                        <a href="#" className="about__promo-card promo-link4">
                            <img src={it} alt="" className="about__promo-icon" />
                            <span className="about__promo-desc">Men IT qánigesi bolıwdı qáleymen</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}