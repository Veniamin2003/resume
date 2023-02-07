import {combineReducers, createStore } from "redux";
import experienceReducer from "./experience-reducer";
import servicesReducer from "./services-reducer";
import portfolioReducer from "./portfolio-reducer";


let reducers = combineReducers({
    experiencePage: experienceReducer,
    servicesPage: servicesReducer,
    portfolioPage: portfolioReducer
});

let store = createStore(reducers);

export default store;