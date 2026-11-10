// Les champs n'ont pas d'état à eux : App le leur donne (value), et ils le lui rendent (onChange).
export default function Filtres({
  recherche, onRecherche,
  genres, genre, onGenre,
  disponiblesSeulement, onDisponiblesSeulement,
  tri, onTri,
  onReinitialiser,
}) {
  return (
    <div className="outils" role="search">
      <div className="champ">
        <label htmlFor="recherche">Titre ou auteur</label>
        <input
          type="search"
          id="recherche"
          value={recherche}
          onChange={(e) => onRecherche(e.target.value)}
        />
      </div>

      <div className="champ">
        <label htmlFor="genre">Genre</label>
        <select id="genre" value={genre} onChange={(e) => onGenre(e.target.value)}>
          <option value="">Tous les genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      <div className="champ">
        <label htmlFor="tri">Trier par</label>
        <select id="tri" value={tri} onChange={(e) => onTri(e.target.value)}>
          <option value="titre">Titre</option>
          <option value="annee">Année, du plus récent</option>
        </select>
      </div>

      <p className="case">
        <input
          type="checkbox"
          id="disponibles"
          checked={disponiblesSeulement}
          onChange={(e) => onDisponiblesSeulement(e.target.checked)}
        />
        <label htmlFor="disponibles">Disponibles seulement</label>
      </p>

      <button type="button" className="secondaire" onClick={onReinitialiser}>
        Réinitialiser
      </button>
    </div>
  );
}
