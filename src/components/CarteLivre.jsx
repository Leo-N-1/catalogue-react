import { Link } from 'react-router';

// Une carte : elle ne décide de rien, elle affiche le livre qu'on lui donne.
export default function CarteLivre({ livre }) {
  return (
    <article className={livre.disponible ? 'livre' : 'livre emprunte'}>
      <img className="couverture" src={`/couvertures/${livre.id}.jpg`} alt="" />
      <p className="genre">{livre.genre}</p>
      <h2><Link to={`/livres/${livre.id}`}>{livre.titre}</Link></h2>
      <p className="auteur">{livre.auteur} · {livre.annee}</p>
      <p className="dispo">{livre.disponible ? 'Disponible' : 'Emprunté'}</p>
    </article>
  );
}
