import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from './data/logements.json';
import ErrorPage404 from './ErrorPage'
import Equipment from './components/equipment';
import Description from './components/description';
import Carousel from './components/carousel';
import Host from './components/host';
import Tags from './components/tags';
import Rating from './components/rating';

function LogementDetail() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);
    const [error, setError] = useState(null);

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
        <div>
            <Carousel logement={logement} />
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
            <Tags tags={logement.tags} />
            <Rating rating={logement.rating} />
            <Host host={logement.host} />
            <Description description={logement.description} />
            <Equipment equipments={logement.equipments} />
        </div>
    );
}

export default LogementDetail;
