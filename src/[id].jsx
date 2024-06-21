import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from './data/logements.json';
import ErrorPage404 from './ErrorPage';
import ratingStars from "./components/rating";
import arrow from './assets/img/white/arrow-up.svg';
import "./assets/accomodation-details.scss";
import Carousel from "./components/carousel";
import ContainerSection from './components/container';

function LogementDetail() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const [equipmentsOpen, setEquipmentsOpen] = useState(false);

    useEffect(() => {
        const foundLogement = logements.find((log) => log.id === id);
        if (foundLogement) {
            setLogement(foundLogement);
        } else {
            setError(new Error('aucun logement trouvé')); // Set error if logement not found
        }
    }, [id]);

    if (error) {
        return <ErrorPage404 />; 
    }
    if (!logement) {
        return <div>chargement...</div>;
    }

    return (
        <div className='accomodation'>
            <div className='banner'>
                <Carousel logement={logement} />
            </div>
            <div className='container'>
                <div className='container_head'>
                    <div className='container_title'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <div className='list_tags'>
                        {logement.tags.map((tag, index) => (
                            <div className='tags' key={index}>
                                <p>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container_host'>
                    <div className='profil'>
                        <p>{logement.host.name}</p>
                        <div className='bubble'>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                    </div>
                    <div className='container_rate'>
                        {ratingStars(logement.rating)}
                    </div>
                </div>
            </div>
            <div className='container_details'>
                <ContainerSection title="Description" content={logement.description} />
                <ContainerSection title="Équipements" content={logement.equipments} />
            </div>
        </div>
    );
}

export default LogementDetail;
