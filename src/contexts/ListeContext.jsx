// BOUCHON posé par le lead technique : il respecte le contrat du sprint 2, et rien de plus.
// Avec lui, la liste contient toujours « Clean Code », et les boutons ne changent rien.
// TODO BIB-3 (B) : remplacer tout ce fichier par le vrai contexte de la liste.
const fausseListe = [{ id: 'clean-code', titre: 'Clean Code', auteur: 'Robert C. Martin' }];

export function ListeProvider({ children }) {
  return children;
}

export function useListe() {
  return {
    liste: fausseListe,
    pleine: false,
    contient: (id) => id === 'clean-code',
    ajouter: () => {},
    retirer: () => {},
    vider: () => {},
  };
}
