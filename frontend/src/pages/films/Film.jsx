import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader from '../../shared/components/loader';
import './film.css'
import { useNavigate } from 'react-router-dom';

export default function Film() {

    let navigate = useNavigate();

    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const moviesRequest = async () => {
        try {
            // Vérification que la variable d'environnement existe
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            if (!backendUrl) {
                throw new Error('URL backend non configurée');
            }

            const res = await axios.get(`${backendUrl}/films`);

            // Gestion robuste des données
            const filmsData = res.data?.films || res.data || [];
            setFilms(Array.isArray(filmsData) ? filmsData : []);

        } catch (error) {
            console.error('Erreur:', error);
            setError(error.message);
            setFilms([]);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        moviesRequest();
    }, []);

    if (loading) return <div>


        <Loader />

    </div>;
    if (error) return <div>Erreur: {error} <p>FILM({films.length})</p></div>;

    return (
        <div className='page-container'>
            <div className="section">
                Total des films disponible: <span>{films.length}</span>
            </div>
            <div className="movies-container">

                {films.map(({ id, titre, url, description }) => (
                    <div key={id} className='movies-card' onClick={()=>navigate(`films/${id}`)}>
                        <div className="img-container">
                             <img src={`photo/${url}`} alt={titre || 'Film'} />
                        </div>
                        <div className="details">
                            <h3>{titre || 'Sans titre'}</h3>
                            <p>{description.substring(0, 150) || 'Aucune description'}</p>

                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}