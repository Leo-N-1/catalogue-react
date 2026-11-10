import { createContext, useContext, useReducer } from 'react';
import { listeReducer, MAXIMUM } from './listeReducer.js';
const ListeContext = createContext(null);
export function ListeProvider({ children }) {
const [liste, dispatch] = useReducer(listeReducer, []);
const valeur = {
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