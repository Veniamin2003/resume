import {BsPatchCheckFill} from "react-icons/bs";

let initialState = {
    experienceFrontend: [
        {id: 1, logo: <BsPatchCheckFill />, name: "HTML", description: "Intermediate"},
        {id: 2, logo: <BsPatchCheckFill />, name: "CSS", description: "Intermediate"},
        {id: 3, logo: <BsPatchCheckFill />, name: "JavaScript", description: "Experience"},
        {id: 4, logo: <BsPatchCheckFill />, name: "React", description: "Experience"},
        {id: 5, logo: <BsPatchCheckFill />, name: "Spline", description: "Intermediate"},
        {id: 6, logo: <BsPatchCheckFill />, name: "Figma", description: "Intermediate"},
    ],

    experienceTypeFrontend: "Frontend Development",

    experienceBackend: [
        {id: 1, logo: <BsPatchCheckFill />, name: "SQL", description: "Intermediate"},
        {id: 2, logo: <BsPatchCheckFill />, name: "C#", description: "Intermediate"},
        {id: 3, logo: <BsPatchCheckFill />, name: "PHP", description: "Intermediate"},
        {id: 3, logo: <BsPatchCheckFill />, name: "PHP", description: "Intermediate"},
        {id: 3, logo: <BsPatchCheckFill />, name: "PHP", description: "Intermediate"},
        {id: 3, logo: <BsPatchCheckFill />, name: "PHP", description: "Intermediate"},
    ],

    experienceTypeBackend: "Backend Development",
};

const experienceReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default experienceReducer;