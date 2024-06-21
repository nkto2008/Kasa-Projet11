import { useState } from 'react';
import arrow from '../assets/img/white/arrow-up.svg';
import '../assets/accomodation-details.scss';

function ContainerSection({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='container_list'>
            <div className={`list_header ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <p>{title}</p>
                <img className="logo" src={arrow} alt="arrow" />
            </div>
            {isOpen && (
                <div className='container_description open'>
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default ContainerSection;
