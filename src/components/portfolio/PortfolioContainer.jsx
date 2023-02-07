import React from "react"
import './portfolio.css'
import {connect} from "react-redux";
import PortfolioItems from "./PortfolioItems";

const Portfolio = (props) => {
    let state = props.portfolioPage;

    let portfolioElements = state.portfolioItems.map(p => <PortfolioItems key={p.id} img={p.img} name={p.name} gitHubLink={p.gitHubLink} liveDemoLink={p.liveDemoLink}/>);
    return (
        <section id="portfolio">
            <h5>Мои проекты</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {portfolioElements}
            </div>
        </section>
    )
}

let mapStateToProps = (state) => {
    return {
        portfolioPage: state.portfolioPage
    }
};

let mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
};

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps) (Portfolio);

export default PortfolioContainer