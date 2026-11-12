import { Link } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';
import { useListe } from '../contexts/ListeContext.jsx';
export default function Compte() {
const { utilisateur } = useAuth();
const { liste } = useListe();
const s = liste.length > 1 ? 's' : '';
return (
<>
<title>Mon compte — Bibliothèque municipale</title>
<h1>Mon compte</h1>
<p>Bonjour {utilisateur.nom}. Adresse de connexion : {utilisateur.email}.</p>
<p>
{liste.length} livre{s} dans <Link to="/ma-liste">votre liste
d'emprunts</Link>.
</p>
</>
);
}