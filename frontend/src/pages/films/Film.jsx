import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Loader  from '../../shared/components/loader';

export default function Film() {
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
        

        <Loader/>

    </div>;
    if (error) return <div>Erreur: {error} <p>FILM({films.length})</p></div>;

    return (
        <div style={{ padding: '20px' }}>
            <h2>Films ({films.length})</h2>
            
            {films.map(film => (
                <div key={film.id} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
                    <h3>{film.titre || 'Sans titre'}</h3>
                    <p>{film.description || 'Aucune description'}</p>
                </div>
            ))}
        </div>
    );
}