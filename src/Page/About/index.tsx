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

export const About: React.FC = () => {
    return (
        <div className="about">
            <div className="about__message">
                <img src={Union} alt="" className="about__union-icon" />
                <div className="about__message-text"><p className="about__bold-message">Приветствуем в Академии будущего ХОД!</p> Вам у нас понравится:)</div>
            </div>
            <img src={slova} alt="" className="about__cova" />

            <div className="about__features">
                <div className="about__feature-card">
                    <img src={cross} alt="" />
                    <span className="about__feature-desc"><p className="about__feature-title">Мы создали Академию</p> для детей, чтобы компьютер был не зависимостью и игрушкой, а другом на пути обучения и развития.</span>
                </div>
                <div className="about__feature-card">
                    <img src={round} alt="" />
                    <span className="about__feature-desc"><p className="about__feature-title">Мы создали Академию</p> для подростков, чтобы «Кем я хочу стать?» больше не был самым сложным вопросом.</span>
                </div>
                <div className="about__feature-card">
                    <img src={triangle} alt="" />
                    <span className="about__feature-desc"><p className="about__feature-title">Мы создали Академию </p> для взрослых, чтобы у них была возможность начать с читатого листа и создать лучшую версию себя в любом возрасте.</span>
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
                <div className="about__wrapper-title">Наши ценности</div>
                <div className="about__inner">
                    <div className="about__inner-box">
                        <img src={Group} alt="" />
                        <span className="about__inner-text">Содержание обучения должно быть актуальным, а методика проверенная годами.</span>
                    </div>
                    <div className="about__inner-box">
                        <img src={teacher} alt="" />
                        <span className="about__inner-text">
                            Педагог - прежде всего личность компетентная и харизматичная.
                        </span>
                    </div>
                    <div className="about__inner-box">
                        <img src={children} alt="" />
                        <span className="about__inner-text">
                            Точка развития образования - ребенок, его интересы и потребности
                        </span>
                    </div>
                    <div className="about__inner-box">
                        <img src={book} alt="" />
                        <span className="about__inner-text">Прогрессом правит любовь к знаниям</span>
                    </div>
                    <div className="about__inner-box">
                        <img src={technology} alt="" />
                        <span className="about__inner-text">Технологии правят миром, а человек эти технологии создает</span>
                    </div>
                </div>
            </div>

            <div className="about__graduates-container">
                <span className="about__graduates-caption">Наши люди</span>
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
                        <img src={avatar1} alt="" className="about__graduates-picture" />
                        <span className="about__graduates-name">Имя Фамилия</span>
                        <span className="about__graduates-desc">Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.</span>
                    </div>
                    <div className="about__graduates-card">
                        <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                        <img src={avatar2} alt="" className="about__graduates-picture" />
                        <span className="about__graduates-name">Имя Фамилия</span>
                        <span className="about__graduates-desc">Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.</span>
                    </div>
                    <div className="about__graduates-card">
                        <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                        <img src={avatar3} alt="" className="about__graduates-picture" />
                        <span className="about__graduates-name">Имя Фамилия</span>
                        <span className="about__graduates-desc">Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.</span>
                    </div>
                    <div className="about__graduates-card">
                        <img src={graduatesCircle} alt="" className="about__graduates-circle-icon" />
                        <img src={avatar4} alt="" className="about__graduates-picture" />
                        <span className="about__graduates-name">Имя Фамилия</span>
                        <span className="about__graduates-desc">Выпускница Гарвардского Университета. Более 10 лет играет в шахматы и участвует в турнирах.</span>
                    </div>
                </div>
            </div>

            <div className="about__programs">
                <div className="about__programs-title">Наши программы</div>
                <div className="about__container">
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Предполагают пролонгированное обучение</span>
                    </div>
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Составлены с учетом возрастных и индивидуальных особенностей детей</span>
                    </div>
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Авторские и не имеют аналогов</span>
                    </div>
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Составлены на основе деятельностного и компетентностного подходов</span>
                    </div>
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Реализуются с помощью современных педагогических технологий</span>
                    </div>
                    <div className="about__box">
                        <img src={GradientLine} alt="" />
                        <span>Актуальны и фундаментальны</span>
                    </div>
                </div>
            </div>

            <div className="about__result">
                <div className="about__courses">
                    <span className="about__courses-number">600</span>
                    <span className="about__courses-title">Курсов</span>
                </div>
                <div className="about__teachers">
                    <span className="about__teachers-number">82</span>
                    <span className="about__teachers-title">Ведущих преподавателей</span>
                </div>
                <div className="about__graduates">
                    <span className="about__graduates-number">14795</span>
                    <span className="about__graduates-title">Выпускников</span>
                </div>
            </div>

            <div className="about__partners">
                <div className="about__partners-title">Наши партнеры</div>
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
                <div className="about__promo-caption">Нажми, если это о тебе</div>
                <div className="about__promo-cards">
                    <a href="#" className="about__promo-card promo-link1">
                        <img src={playtime} alt="" className="about__promo-icon" />
                        <span className="about__promo-desc">Я хочу, чтобы мой ребенок был успешным</span>
                    </a>
                    <a href="#" className="about__promo-card promo-link2">
                        <img src={budget} alt="" className="about__promo-icon" />
                        <span className="about__promo-desc">Я хочу больше зарабатывать</span>
                    </a>
                    <a href="#" className="about__promo-card promo-link3">
                        <img src={mobileGame} alt="" className="about__promo-icon" />
                        <span className="about__promo-desc">Мой ребенок не выпускает гаджет из рук</span>
                    </a>
                    <a href="#" className="about__promo-card promo-link4">
                        <img src={it} alt="" className="about__promo-icon" />
                        <span className="about__promo-desc">Я хочу стать айтишником</span>
                    </a>
                </div>
            </div>
        </div>
    )
}