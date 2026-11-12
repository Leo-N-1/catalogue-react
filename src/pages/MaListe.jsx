import { Link } from 'react-router';
import { useListe } from '../contexts/ListeContext.jsx';
import { MAXIMUM } from '../contexts/listeReducer.js';
export default function MaListe() {
    const { liste, retirer, vider } = useListe();
    const s = liste.length > 1 ? 's' : '';
    function confirmerVider() {
        if (window.confirm('Retirer tous les livres de votre liste ?')) {
            vider();
        }
    }
    return (
        <>
            <title>Ma liste — Bibliothèque municipale</title>
            <h1>Ma liste d'emprunts</h1>
            {liste.length === 0 ? (
                <p className="aucun">
                    Votre liste est vide. <Link to="/catalogue">Choisir des livres dans le
                        catalogue</Link>
                </p>
            ) : (
                <>
                    <p className="compteur">{liste.length} livre{s} sur {MAXIMUM} possibles.
                    </p>
                    <ul className="selection">
                        {liste.map((livre) => (
                            <li key={livre.id}>
                                <p><Link to={`/livres/${livre.id}`}>{livre.titre}</Link>,
                                    {livre.auteur}</p>
                                <button
                                    type="button"
                                    className="secondaire"
                                    aria-label={`Retirer ${livre.titre}`}
                                    onClick={() => retirer(livre.id)}
                                >
                                    Retirer
                                </button>
                            </li>
                        ))}
                    </ul>
                    <p className="barre">
                        <button type="button" className="secondaire" onClick={confirmerVider}>
                            Vider la liste
                        </button>
                    </p>
                </>
            )}
        </>
    );
}