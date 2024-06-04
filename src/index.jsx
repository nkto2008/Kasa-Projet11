import logement from './data/logements.json'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Charger les données du fichier JSON
        setData(logement);
    }, []);

    return (
        <div>
            <h1>Accueil</h1>
            <ul>
                {data.map(logement => (
                    <li key={logement.id}>
                        <Link to={`/${logement.id}`}>
                            {logement.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
