export default function Compte({ utilisateur }) {
  return (
    <>
      <title>Mon compte — Bibliothèque municipale</title>
      <h1>Mon compte</h1>
      <p>Bonjour {utilisateur.nom}. Adresse de connexion : {utilisateur.email}.</p>
      <p>Votre liste d'emprunts apparaîtra ici.</p>
    </>
  );
}
