import { useState } from 'react';
import { useSearchParams } from 'react-router';
import { livres } from '../data/livres.js';
import Filtres from '../components/Filtres.jsx';
import ListeLivres from '../components/ListeLivres.jsx';

// Les genres proposés dans le filtre : chacun une seule fois, dans l'ordre alphabétique.
const genres = [...new Set(livres.map((livre) => livre.genre))].sort();

export default function Catalogue() {
  // La recherche vit dans l'adresse (?q=…) : elle survit au retour arrière, et se partage.
  const [parametres, setParametres] = useSearchParams();
  const recherche = parametres.get('q') ?? '';
  const [genre, setGenre] = useState('');
  const [disponiblesSeulement, setDisponiblesSeulement] = useState(false);
  const [tri, setTri] = useState('titre');

  function setRecherche(valeur) {
    setParametres(valeur ? { q: valeur } : {}, { replace: true });
  }

  // Ce qui s'affiche se CALCULE à partir de l'état, à chaque rendu : on ne le range pas dans un état.
  const texte = recherche.trim().toLowerCase();
  const selection = livres
    .filter((livre) => `${livre.titre} ${livre.auteur}`.toLowerCase().includes(texte))
    .filter((livre) => genre === '' || livre.genre === genre)
    .filter((livre) => !disponiblesSeulement || livre.disponible)
    .toSorted((a, b) => (tri === 'annee' ? b.annee - a.annee : a.titre.localeCompare(b.titre, 'fr')));

  function reinitialiser() {
    setRecherche('');
    setGenre('');
    setDisponiblesSeulement(false);
    setTri('titre');
  }

  const s = selection.length > 1 ? 's' : '';

  return (
    <>
      <title>Catalogue — Bibliothèque municipale</title>
      <h1>Le catalogue</h1>

      <Filtres
        recherche={recherche}
        onRecherche={setRecherche}
        genres={genres}
        genre={genre}
        onGenre={setGenre}
        disponiblesSeulement={disponiblesSeulement}
        onDisponiblesSeulement={setDisponiblesSeulement}
        tri={tri}
        onTri={setTri}
        onReinitialiser={reinitialiser}
      />

      <p className="compteur" aria-live="polite">
        {selection.length} livre{s} affiché{s} sur {livres.length}
      </p>

      <ListeLivres livres={selection} />
    </>
  );
}
