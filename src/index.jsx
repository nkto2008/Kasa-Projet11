import logement from './data/logements.json'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./assets/index.scss"

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(logement);
    }, []);

    return (
        <div className='home'>
            <div className='banner'>
                <h2>Chez vous, partout et ailleurs</h2>
            </div>
            <div className='container'>
                {data.map((logement) => (
                    <Link to={`/${logement.id}`} className='card-link' key={logement.id}>
                        <div className='card'>
                            <div className='card-image'>
                                <img src={logement.cover} alt={logement.title} />
                            </div>
                            <p>{logement.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
