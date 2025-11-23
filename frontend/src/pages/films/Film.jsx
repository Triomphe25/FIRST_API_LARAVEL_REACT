import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Film() {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);

    const moviesRequest = async () => {
        try {
            const res = await axios.get(import.meta.env.VITE_BACKEND_URL);
            setFilms(res.data.films || []); // S'assurer que c'est toujours un tableau
            setLoading(false);
        } catch (error) {
            console.error('Erreur:', error);
            setFilms([]); // Définir un tableau vide en cas d'erreur
            setLoading(false);
        }
    }

    useEffect(() => {
        moviesRequest();
    }, []);

    // Afficher un loading pendant le chargement
    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div>
            Film {films?.length} {/* Optional chaining pour sécurité */}
            <p> vonnfnnfn</p>
            
            {/* Afficher les films */}
            {films?.map(film => (
                <div key={film.id}>
                    <h3>{film.title}</h3>
                    <p>{film.description}</p>
                </div>
            ))}
        </div>
    );
}