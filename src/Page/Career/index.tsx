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
                <span className="career__holder-title">Поможем построить карьеру</span>
                <span className="career__holder-subtitle">Карьерный центр ХОД Future Academy</span>
                <img src={cross} alt="" className="career__holder-icon1" />
                <img src={round} alt="" className="career__holder-icon2" />
                <img src={miniCross} alt="" className="career__holder-icon3" />
                <img src={Vector1} alt="" className="career__holder-icon4" />
                <img src={triange} alt="" className="career__holder-icon5" />
                <img src={Vector2} alt="" className="career__holder-icon6" />
                <img src={MaskGroup} alt="" className="career__holder-picture1" />
                <img src={MaskGroup1} alt="" className="career__holder-picture2" />
                <img src={MaskGroup2} alt="" className="career__holder-picture3" />
                <a href="#" className="career__holder-link">Задать вопрос о трудоустройстве</a>
            </div>

            <div className="career__wrapper">
                <div>
                    <img src={Union} alt="" className="career__union" />
                    <span className="career__message">С нами вы найдёте работу о которой мечтали</span>
                    <img src={sova} alt="" className="career__cova" />
                </div>
                <div className="career__preview">
                    <div className="career__preview-box">
                        <img src={previewCross} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Заголовок</span>
                        <span className="career__preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</span>
                    </div>
                    <div className="career__preview-box">
                        <img src={previewRound} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Заголовок</span>
                        <span className="career__preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</span>
                    </div>
                    <div className="career__preview-box">
                        <img src={previewTriangle} alt="" className="career__preview-icon" />
                        <span className="career__preview-title">Заголовок</span>
                        <span className="career__preview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget</span>
                    </div>
                </div>

                <div className="career__tagline">
                    <div className="career__tagline-title">Почему вы точно найдете работу с ХОД Future Academy</div>

                    <div className="career__tagline-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec. Suspendisse a ullamcorper nisi. Duis et mauris et ex posuere dignissim vitae a diam. Praesent vulputate nulla sapien, nec auctor nibh congue eu. Nulla lectus felis, luctus et sodales ac, convallis quis urna. Etiam id ultricies dolor, non efficitur tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</div>

                    <div className="career__tagline-result">
                        <div className="career__tagline-vacancy">
                            <span className="career__vacancy-number">600</span>
                            <span className="career__vacancy-text">Вакансий</span>
                        </div>
                        <div className="career__tagline-employed">
                            <span className="career__employed-number">82%</span>
                            <span className="career__employed-text">Трудоустроенных студентов</span>
                        </div>
                        <div className="career__tagline-salary">
                            <span className="career__salary-number">98 795</span>
                            <span className="career__salary-text">Средняя зарплата наших выпускников</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="career__employment">
                <span className="career__employment-title">Ваш путь к трудоустройству</span>
                <img src={sdf1} alt="" className="career__employment-icon1" />
                <img src={sdf2} alt="" className="career__employment-icon2" />
                <img src={sdf3} alt="" className="career__employment-icon3" />

                <div className="career__employment-col">
                    <div className="career__employment-box">
                        <img src={employmentCros} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem, et gravida mi tincidunt nec.</span>
                    </div>
                    <div className="career__employment-box">
                        <img src={employmentRound} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.</span>
                    </div>
                    <div className="career__employment-box">
                        <img src={employmentTriangle} alt="" className="career__employment-icon" />
                        <span className="career__employment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. In scelerisque pulvinar sem.</span>
                    </div>
                </div>
                <a href="#" className="career__employment-link">Задать вопрос о трудоустройстве</a>
            </div>

            <div className="career__vacancy">
                <div className="career__vacancy-caption">Примеры активных вакансий</div>
                <div className="career__vacancy-cards">
                    <div className="career__vacancy-card vacancy-card1">
                        <span className="career__vacancy-title">Графический дизайнер</span>
                        <span className="career__vacancy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </span>
                        <span className="career__vacancy-salary">от  80 000 ₽ в месяц</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card2">
                        <span className="career__vacancy-title">Веб-разработчик</span>
                        <span className="career__vacancy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </span>
                        <span className="career__vacancy-salary">от  90 000 ₽ в месяц</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card3">
                        <span className="career__vacancy-title">Графический дизайнер</span>
                        <span className="career__vacancy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </span>
                        <span className="career__vacancy-salary">от  80 000 ₽ в месяц</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card4">
                        <span className="career__vacancy-title">Графический дизайнер</span>
                        <span className="career__vacancy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </span>
                        <span className="career__vacancy-salary">от  80 000 ₽ в месяц</span>
                    </div>
                    <div className="career__vacancy-card vacancy-card5">
                        <span className="career__vacancy-title">Веб-разработчик</span>
                        <span className="career__vacancy-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis tellus feugiat, posuere magna et, scelerisque leo. </span>
                        <span className="career__vacancy-salary">от  90 000 ₽ в месяц</span>
                    </div>
                </div>

                <div className="career__vacancy-subtitle">Компании где уже работают наши студенты</div>
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