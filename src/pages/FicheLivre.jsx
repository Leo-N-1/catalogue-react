import { Link, useNavigate, useParams } from 'react-router';
import { livres } from '../data/livres.js';

export default function FicheLivre() {
  const { id } = useParams();
  const navigate = useNavigate();
  const livre = livres.find((l) => l.id === id);

  if (!livre) {
    return (
      <>
        <title>Livre introuvable — Bibliothèque municipale</title>
        <h1>Livre introuvable</h1>
        <p>Aucun livre ne porte l'identifiant « {id} ». <Link to="/catalogue">Retour au catalogue</Link></p>
      </>
    );
  }

  return (
    <>
      <title>{`${livre.titre} — Bibliothèque municipale`}</title>
      <p className="fil"><Link to="/catalogue">Catalogue</Link> › {livre.titre}</p>

      <article className={livre.disponible ? 'fiche' : 'fiche emprunte'}>
        <p className="genre">{livre.genre}</p>
        <h1>{livre.titre}</h1>
        <p className="auteur">{livre.auteur} · {livre.annee}</p>
        <p className="dispo">{livre.disponible ? 'Disponible' : 'Emprunté'}</p>
        <p className="resume">{livre.resume}</p>

        <div className="actions">
          <button type="button" className="secondaire" onClick={() => navigate(-1)}>
            Retour
          </button>
        </div>
      </article>
    </>
  );
}
