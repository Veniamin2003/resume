import React from "react"
import './experience.css'
import ExperienceItems from "./ExperienceItems";
import {connect} from "react-redux";
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = (props) => {
    let state = props.experiencePage;

    let experienceElementsFrontend = state.experienceFrontend.map(p => <ExperienceItems key={p.id} logo={p.logo} name={p.name} description={p.description}/>);
    let experienceElementsBackend = state.experienceBackend.map(p => <ExperienceItems key={p.id} logo={p.logo} name={p.name} description={p.description}/>);

    return (
        <section id="experience">
            <h5>Что я умею</h5>
            <h2>Мой опыт</h2>

            <div className="container experience__container">

               <div className="experience__frontend">
                    <h3>{state.experienceTypeFrontend}</h3>
                   <div className="experience__content">
                       {experienceElementsFrontend}
                   </div>
                </div>

                <div className="experience__backend">
                    <h3>{state.experienceTypeBackend}</h3>
                    <div className="experience__content">
                        {experienceElementsBackend}
                    </div>
                </div>
            </div>
        </section>
    )
};

let mapStateToProps = (state) => {
    return {
        experiencePage: state.experiencePage
    }
};

let mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
};

const ExperienceContainer = connect(mapStateToProps, mapDispatchToProps) (Experience);

export default ExperienceContainer;