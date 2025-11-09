import './BuyTicket.scss'

export const BuyTicket = ({pickSeance, setPickSeance, time, setTime}) => {
    function Close() {
        setPickSeance(null);
        setTime(null);
    }

    function Click() {
        setPickSeance(null);
        setTime(null)
        alert("Дякуємо за покупку!")
    }

    return (
        <div className="form">
            <div className="form-header">
                <h1>{pickSeance.title}</h1>
                <button className="close-button"
                        onClick={() => Close()}>
                    <img className="close-image" src="public/SideImage/close-x.svg"
                         alt="close"/></button>
            </div>
            <h1 className="time">{time}</h1>
            <div className="form-texts">
                <p className="form-text">Повне ім'я</p>
                <p className="form-text">Пошта</p>
            </div>
            <div className="inputs">
                <input type="text" className="input-name input"/>
                <input type="email" className="input-email input"/>
            </div>
            <div className="button-block">
                <button className="form__button" onClick={() => Click()}>Купити</button>
            </div>
        </div>
    )
}
