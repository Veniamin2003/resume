import React from "react";
import './servicesItems.css'

const ServicesItems = (props) => {
    return (
        <li>
            <div className="service__list__icon">
                {props.logo}
            </div>
            <p>
                {props.description}
            </p>
        </li>
    )
}

export default ServicesItems;