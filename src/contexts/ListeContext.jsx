import { createContext, useContext, useEffect, useReducer } from 'react';
import { listeReducer, MAXIMUM } from './listeReducer.js';
const ListeContext = createContext(null);
const CLE = 'liste-emprunts';
// Au premier affichage, on relit la liste enregistrée ; si elle est absente ou abîmée, liste vide.
function charger() {
    try {
        return JSON.parse(localStorage.getItem(CLE)) ?? [];
    } catch {
        return [];
    }
}
export function ListeProvider({ children }) {
    const [liste, dispatch] = useReducer(listeReducer, [], charger);
    // Après chaque changement de la liste, on l'enregistre.
    useEffect(() => {
        localStorage.setItem(CLE, JSON.stringify(liste));
    }, [liste]); const valeur = {
        liste,
        pleine: liste.length >= MAXIMUM,
        contient: (id) => liste.some((l) => l.id === id),
        ajouter: (livre) => dispatch({ type: 'ajouter', livre }),
        retirer: (id) => dispatch({ type: 'retirer', id }),
        vider: () => dispatch({ type: 'vider' }),
    };
    return <ListeContext value={valeur}>{children}</ListeContext>;
}
export function useListe() {
    const contexte = useContext(ListeContext);
    if (!contexte) {
        throw new Error('useListe doit être utilisé dans un <ListeProvider>.');
    }
    return contexte;
}