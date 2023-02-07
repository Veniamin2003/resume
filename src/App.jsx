import React from "react"
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import ServicesContainer from "./components/services/ServicesContainer";
import PortfolioContainer from "./components/portfolio/PortfolioContainer";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ExperienceContainer from "./components/experience/ExperienceContainer";

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <ExperienceContainer />
            <ServicesContainer />
            <PortfolioContainer />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App