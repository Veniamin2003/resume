import React from "react";
import "./portfolioItems.css"

const PortfolioItems = (props) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={props.img} alt={props.name}/>
            </div>
            <h3>{props.name}</h3>
            <div className="portfolio__item-cta">
                <a href={props.gitHubLink} className="btn" target="_blank">Github</a>
                <a href={props.liveDemoLink} className="btn btn-primary" target="_blank">Посмотреть сайт</a>
            </div>

        </article>
    )
}

export default PortfolioItems;