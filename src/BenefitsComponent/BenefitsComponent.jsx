import './BenefitsComponent.scss';

export const BenefitsComponent = ({benefits}) => {
    return (<>
            {benefits && (
                <ul className="benefits__list">
                    {benefits.map((benefits, i) => (
                        <li className='benefits_component' key={i}>
                            <div
                                className="benefits_image"
                                style={{backgroundImage: `url(${benefits.icon})`}}
                            >
                            </div>
                            <h3 className="component_title">{benefits.title}</h3>
                            <p className="component_text">{benefits.text}</p>
                        </li>
                    ))}
                </ul>
            )}</>

    )
        ;
};
