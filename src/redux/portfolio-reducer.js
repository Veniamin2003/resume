import IMG1 from "../assets/portfolio2.jpg"
import Paint from "../assets/paint.jpg"
import Model from "../assets/3DModel.jpg"
import Calc from "../assets/StairCalc.jpg"
import SocialNet from "../assets/SocialNet.jpg"

let initialState = {
    portfolioItems: [
        {id: 1, img: SocialNet, name: "Социальная сеть Q-venk", gitHubLink: "", liveDemoLink: ""},
        {id: 2, img: Calc, name: "Онлайн калькулятор лестниц", gitHubLink: "", liveDemoLink: ""},
        {id: 3, img: Model, name: "3D модель", gitHubLink: "", liveDemoLink: ""},
        {id: 4, img: Paint, name: "Web Paint", gitHubLink: "", liveDemoLink: ""},
    ]
};

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default portfolioReducer;