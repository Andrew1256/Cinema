import {MapContainer, Marker, Popup, TileLayer, useMap} from "react-leaflet";
import {useState} from "react";
import "leaflet/dist/leaflet.css";
import {Outlet} from "react-router-dom";
import './Cinema.scss'

function FlyToMarker({coords}) {
    const map = useMap();
    if (coords) {
        map.setView(coords, 15);
    }
    return null;
}

export const Cinema = () => {
    const [activeCoords, setActiveCoords] = useState(null);

    const cinemas = [
        {
            id: 1,
            name: "Кінотеатр Родина",
            coords: [49.23368296349453, 28.47102912168748],
            link: './Cinema/Kinoteatr_1.png'
        },
        {
            id: 2,
            name: "Cinema city",
            coords: [49.228394713860006, 28.42592311828864],
            link: './Cinema/Kinoteatr_2.png'
        },
    ];

    return (
        <>
            <Outlet/>
            <div className="main">
                <h1 className="cinema-title">Кінотеатри Вінниці</h1>
                <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                        {cinemas.map((cinema) => (
                            <button
                                className="cinema-button"
                                key={cinema.id}
                                onClick={() => setActiveCoords(cinema.coords)}
                            >
                                <div className="cinema-image" style={{backgroundImage: `url(${cinema.link})`}}></div>
                                <div className="cinema-name">{cinema.name}</div>
                            </button>
                        ))}
                    </div>

                    <MapContainer
                        center={[49.233083, 28.481994]}
                        zoom={13}
                        style={{height: "400px", width: "600px", marginTop: "100px", marginBottom: "100px"}}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                        {cinemas.map((cinema) => (
                            <Marker key={cinema.id} position={cinema.coords}>
                                <Popup>{cinema.name}</Popup>
                            </Marker>
                        ))}

                        <FlyToMarker coords={activeCoords}/>
                    </MapContainer>
                </div>
            </div>
        </>
    );
}
