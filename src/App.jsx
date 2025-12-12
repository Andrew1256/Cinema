import {Link, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import './App.scss'
import {BenefitsComponent} from "./BenefitsComponent/BenefitsComponent.jsx";

export const App = () => {
    const [benefits, setBenefits] = useState(null);

    useEffect(() => {
        fetch("./Benefits.json")
            .then((res) => res.json())
            .then((data) => setBenefits(data))
            .catch((err) => console.error("Error fetching benefits:", err))
            .finally(() => console.log("Fetched benefits..."));
    }, []);

    return (
        <>
            <Outlet/>

            <div className="slider">
                <h1 className="slider__title">Твоє кіно y Вінниці</h1>
                <img src="./Cinema/gif_finish.gif" className="gif-animation"></img>

                <Link to="/schedule">
                    <button className="slider__button">Дивитись розклад</button>
                </Link>
                <img src="SideImage/Art_01.png" alt="Попкорн" className="slider__image slider__image-side-1"/>

                <img src="SideImage/Art_01.png" alt="Попкорн" className="slider__image slider__image-side-2"/>
                <img src="SideImage/Art_5.png" alt="3д очки" className="slider__image slider__image-side-3"/>
                <img src="SideImage/Art_6.png" alt="Кіно плівка" className="slider__image slider__image-side-4"/>
            </div>

            <h1 className="title-before-benefits">Чому ми?</h1>

            <BenefitsComponent benefits={benefits}/>
        </>
    );
};
