import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { adherents } from '../data/adherents.js';

export default function Connexion({ onConnexion }) {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [erreur, setErreur] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  function envoyer(e) {
    e.preventDefault();
    const adherent = adherents.find((a) => a.email === email.trim() && a.motDePasse === motDePasse);

    if (!adherent) {
      setErreur('Adresse ou mot de passe incorrect.');
      return;
    }

    onConnexion({ id: adherent.id, nom: adherent.nom, email: adherent.email });
    // Retour à la page qui avait demandé la connexion, sinon au compte.
    navigate(location.state?.depuis ?? '/compte', { replace: true });
  }

  return (
    <>
      <title>Connexion — Bibliothèque municipale</title>
      <h1>Connexion</h1>

      {erreur && <p className="alerte" role="alert">{erreur}</p>}

      <form className="formulaire" onSubmit={envoyer}>
        <div className="champ">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="champ">
          <label htmlFor="mot-de-passe">Mot de passe</label>
          <input
            type="password"
            id="mot-de-passe"
            autoComplete="current-password"
            required
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
          />
          <p className="aide">Pour les essais : lea.martin@exemple.fr, mot de passe « lecture ».</p>
        </div>

        <button type="submit">Se connecter</button>
      </form>
    </>
  );
}
