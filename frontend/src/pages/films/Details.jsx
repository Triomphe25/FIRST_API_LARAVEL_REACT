import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../shared/components/loader'
import './Details.css'
// Assure-toi d'importer ScrollToBottom si c'est un composant externe
// import ScrollToBottom from 'react-scroll-to-bottom';

export default function Details() {
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState(1)

  const { id } = useParams();

  const tabs = [
    { id: 1, title: "Description" },
    { id: 2, title: "Acteurs" },
  ];

  // Correction : Ajout de 'const' pour déclarer la variable
  const conversationData = [
    {
      from: 1, // Correction : 'form' -> 'from' (pour correspondre au mapping)
      msg: "lorem"
    },
    {
      from: 2,
      msg: "lorem"
    }
  ]

  useEffect(() => {
    moviesRequest();
  }, [id])

  const moviesRequest = async () => {
    setLoading(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get(`${backendUrl}/films/${id}`);
      setMovie(response.data.film || response.data || response.data.data);
    } catch (err) {
      console.error('Erreur:', err);
    } finally {
      setLoading(false);
    }
  };

  // Si ScrollToBottom est un composant que tu as créé, assure-toi de l'importer
  // Sinon, tu peux utiliser une div simple pour le moment :
  const ScrollToBottom = ({ children, className }) => {
    return <div className={className}>{children}</div>;
  };

  const renderData = () => {
    if (loading) return <Loader />;

    if (!movie) return (
      <div className="page-container">
        <p>Film non trouvé ou chargement échoué</p>
        <button onClick={() => window.location.href = '/'}>
          Retour à l'accueil
        </button>
      </div>
    );

    return (
      <div className="page-container">
        <div className="movie-pic-container">
          <div className="movie-pic">
            <div className="movie-details">
              <h4>{movie.titre || 'Titre non disponible'}</h4>
              <p>{movie.description || 'Description non disponible'}</p>
              <button>Acheter le film</button>
            </div>
          </div>
        </div>
        <div className="more-info">
          <div className="details">
            <div className="tabs">
              {tabs.map(({ id, title }) => { // Utilise 'title' ici
                return (
                  <div key={id}
                    className={`tabs-item ${id === activeTab ? "active" : ""}`}
                    onClick={() => setActiveTab(id)}>
                    {title} {/* Utilise 'title' ici */}
                  </div>
                );
              })}
            </div>
            <div className="tabs-content">
              {activeTab === 1 ? "ceci est une table actif" : 'aucune table actif'}
            </div>
          </div>
          <div className="chat">
            <div className="title">{movie.titre} - Discussion</div>
            {/* Correction : ScrollToBotton -> ScrollToBottom */}
            <ScrollToBottom className="coversations-container">
              {conversationData.map(({ from, msg }) => {
                return (
                  <div key={from} className={`message ${from === 1 ? "me" : "all"}`}>
                    {msg}
                  </div>
                )
              })}
            </ScrollToBottom>
            <input placeholder='message' />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {renderData()}
    </div>
  );
}