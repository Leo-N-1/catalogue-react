import { Link } from 'react-router';

export default function PageIntrouvable() {
  return (
    <>
      <title>Page introuvable — Bibliothèque municipale</title>
      <h1>Page introuvable</h1>
      <p>Cette adresse ne correspond à aucune page. <Link to="/">Retour à l'accueil</Link></p>
    </>
  );
}
