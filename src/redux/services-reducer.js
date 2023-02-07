import {BiCheck} from "react-icons/bi"

let initialState = {
    servicesDesignItems: [
        {id: 1, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 2, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 3, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 4, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    ],
    servicesDesignName: "UI/Ux Design",


    servicesWebDevelopmentItems: [
        {id: 1, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 2, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 3, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 4, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 5, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 6, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
    ],
    servicesWebDevelopmentName: "Web Development",

    servicesContentCreationItems: [
        {id: 1, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 2, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 3, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."},
        {id: 4, logo: <BiCheck />, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
    ],
    servicesContentCreationName: "Content Creation",
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default servicesReducer;