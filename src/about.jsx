import React, { useState } from 'react';
import './assets/about.scss';
import arrow from './assets/img/white/arrow-up.svg';
import ContainerSection from './components/container';
function About() {
    const [activeIndices, setActiveIndices] = useState([]);

    const data = {
        items: [
            {
                title: "Fiabilité",
                description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            },
            {
                title: "Respect",
                description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            },
            {
                title: "Service",
                description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            },
            {
                title: "Sécurité",
                description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
            }
        ]
    };

    const handleClick = (index) => {
        setActiveIndices((prevIndices) =>
            prevIndices.includes(index)
                ? prevIndices.filter((i) => i !== index)
                : [...prevIndices, index]
        );
    };

    return (
        <div className='about'>
            <div className='banner'></div>
            <div className='container'>
                {data.items.map((item, index) => (
                    <ContainerSection
                        key={index}
                        title={item.title}
                        content={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
