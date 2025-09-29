import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import './Schedule.scss';
import {BuyTicket} from "../BuyTicket/BuyTicket.jsx";

export const Schedule = () => {
    const [films, setFilms] = useState(null);
    const [pickSeance, setPickSeance] = useState(null);
    const [time, setTime] = useState(null);

    function Click(film, time) {
        setPickSeance(film);
        setTime(time);
    }

    useEffect(() => {
        fetch("./public/FilmCatalog/Films.json")
            .then(res => res.json())
            .then((data) => setFilms(data.movies))
            .catch((err) => console.error("Error fetching films:", err))
            .finally(() => console.log("Fetched films..."));
    }, []);
    return (
        <>
            <Outlet/>
            <h1 className="schedule__title">Розклад сеансів:</h1>
            <ul className="container">
                {films && films.map((film, index) => (
                    <li className="card" key={index}>
                        <div style={{backgroundImage: `url(${film.image})`}} className="card__image"></div>
                        <h1 className="card__title">{film.title}</h1>
                        <p className="card__text">{film.text}</p>
                        <div className="sesion__buttons">
                            <button className="sesion" key={index + 10}
                                    onClick={() => Click(film, film.sessions[0])}>{film.sessions[0]}</button>
                            <button className="sesion sesion-2" key={index + 15}
                                    onClick={() => Click(film, film.sessions[1])}>{film.sessions[1]}</button>
                        </div>
                    </li>
                ))}
            </ul>
            {pickSeance &&
                <BuyTicket pickSeance={pickSeance} setPickSeance={setPickSeance} time={time} setTime={setTime}/>}
        </>
    )
}
