import React from "react"
import './about.css'
import ME from "../../assets/me-org.png"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
    return (
        <section id="about">
            <h5>Основная информация</h5>
            <h2>Обо мне</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image"/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Опыт</h5>
                            <small>1+ год работы</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Клиенты</h5>
                            <small>10+ выполненных работ</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Проекты</h5>
                            <small>3 приложения</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at aut, earum et,
                        eum incidunt ipsam ipsum maxime modi non nulla, numquam totam vitae voluptas voluptatum?
                        Nam necessitatibus neque ut.
                    </p>

                    <a href="#contact" className="btn btn-primary">Связяться со мной</a>
                </div>
            </div>
        </section>
    )
}

export default About