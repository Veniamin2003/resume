import React from "react";
import './experienceItem.css'

const ExperienceItems = (props) => {
    return (
        <article className="experience__details">
            <div className="experience__details-icon">{props.logo}</div>
            <div>
                <h4>{props.name}</h4>
                <small className="text-light">{props.description}</small>
            </div>
        </article>
    )
}

export default ExperienceItems;