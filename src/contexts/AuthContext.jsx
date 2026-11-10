// BOUCHON posé par le lead technique : il respecte le contrat du sprint 1, et rien de plus.
// Avec lui, personne n'est jamais connecté.
// TODO BIB-1 (A) : remplacer tout ce fichier par le vrai contexte de connexion.
export function AuthProvider({ children }) {
  return children;
}

export function useAuth() {
  return { utilisateur: null, connecter: () => {}, deconnecter: () => {} };
}
