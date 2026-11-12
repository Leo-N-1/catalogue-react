import { useListe } from '../contexts/ListeContext.jsx';
// Le même bouton sur les cartes et sur la fiche : il sait tout seul dans quel état il est.
export default function BoutonListe({ livre }) {
    const { contient, pleine, ajouter } = useListe();
    if (!livre.disponible) {
        return <button type="button" disabled>Indisponible</button>;
    }
    if (contient(livre.id)) {
        return <button type="button" disabled>Dans ma liste</button>;
    }
    if (pleine) {
        return <button type="button" disabled>Liste pleine</button>;
    }
    return (
        <button type="button" onClick={() => ajouter(livre)}>
            Ajouter à ma liste
        </button>
    );
}