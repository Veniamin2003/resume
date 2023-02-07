import React from "react"
import './services.css'
import {connect} from "react-redux";
import ServicesItems from "./ServicesItems";


const Services = (props) => {
    let state = props.servicesPage;

    let servicesDesignElements = state.servicesDesignItems.map(p => <ServicesItems key={p.id} logo={p.logo} description={p.description}/>);
    let servicesWebDevelopmentElements = state.servicesWebDevelopmentItems.map(p => <ServicesItems key={p.id} logo={p.logo} description={p.description}/>);
    let servicesContentCreationElements = state.servicesContentCreationItems.map(p => <ServicesItems key={p.id} logo={p.logo} description={p.description}/>);

    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>{state.servicesDesignName}</h3>
                    </div>
                    <ul className="service__list">
                        {servicesDesignElements}
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>{state.servicesWebDevelopmentName}</h3>
                    </div>
                    <ul className="service__list">
                        {servicesWebDevelopmentElements}
                    </ul>
                </article>

                <article className="service">
                    <div className="service__head">
                        <h3>{state.servicesContentCreationName}</h3>
                    </div>
                    <ul className="service__list">
                        {servicesContentCreationElements}
                    </ul>
                </article>
            </div>
        </section>
    )
};

let mapStateToProps = (state) => {
    return {
        servicesPage: state.servicesPage
    }
};

let mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
};

const ServicesContainer = connect(mapStateToProps, mapDispatchToProps) (Services);

export default ServicesContainer;