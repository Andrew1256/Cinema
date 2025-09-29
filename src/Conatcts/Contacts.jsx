import {Outlet} from "react-router-dom";
import './Contacts.scss'

export const ContactsPage = () => {
    const contacts = [
        {
            id: '1',
            photo: 'Contacts/FaceBook.svg',
            links: [
                'https://www.facebook.com/cinemaciti.ua/',
                'https://www.facebook.com/smartcinemaua/about/'
            ]
        },
        {
            id: '2',
            photo: 'Contacts/Telegram.svg',
            links: [
                'https://t.me/cinemacitygram',
                'https://t.me/sccatalog'
            ]
        }
    ];

    return (
        <>
            <Outlet/>
            <div className="contacts__container">
                <div className="conacts-block first-block">
                    <h1>Cinema City</h1>
                    <p>096-003-50-50</p>
                    <div className="social">
                        {contacts.map((contact, index) => (
                            <div className="circle" key={index}>
                                <a href={contact.links[0]}><img src={contact.photo} alt=""
                                                                className="social__icon"/></a>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="conacts-block second-block">
                    <h1>Smart Cinema</h1>
                    <p>068-670-40-69</p>
                    <div className="social">
                        {contacts.map((contact, index) => (
                            <div className="circle" key={index}>
                                <a href={contact.links[1]}><img src={contact.photo} alt=""
                                                                className="social__icon"/></a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
