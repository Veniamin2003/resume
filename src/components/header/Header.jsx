import React from "react"
import "./header.css"
import CTA from "./CTA";
import ME from "../../assets/2.png"
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Привет, меня зовут</h5>
                <h1>Вениамин</h1>
                <h5 className="text-light">Frontend Разработчик</h5>
                <CTA />
                <HeaderSocials />


                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className="scroll__down">Спуститься вниз</a>
            </div>
        </header>

    )
}

export default Header