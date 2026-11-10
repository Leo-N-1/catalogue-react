import { Link } from 'react-router';
import { livres } from '../data/livres.js';
import ListeLivres from '../components/ListeLivres.jsx';

// Les trois parutions les plus récentes du catalogue.
const recents = livres.toSorted((a, b) => b.annee - a.annee).slice(0, 3);

export default function Accueil() {
  return (
    <>
      <title>Accueil — Bibliothèque municipale</title>
      <h1>Bienvenue à la bibliothèque</h1>
      <p>
        {livres.length} livres à emprunter, du roman à l'informatique.{' '}
        <Link to="/catalogue">Parcourir le catalogue</Link>
      </p>

      <h2>Les parutions les plus récentes</h2>
      <ListeLivres livres={recents} />
    </>
  );
}
