import { Link, NavLink, Outlet } from 'react-router';

// Ce qui est commun à toutes les pages. <Outlet /> marque l'endroit où s'affiche la page demandée.
export default function MiseEnPage({ utilisateur, onDeconnexion }) {
  return (
    <>
      <a className="evitement" href="#contenu">Aller au contenu</a>

      <header className="en-tete">
        <p className="logo"><Link to="/">Bibliothèque municipale</Link></p>
        <nav aria-label="Navigation principale">
          <ul>
            <li><NavLink to="/" end>Accueil</NavLink></li>
            <li><NavLink to="/catalogue">Catalogue</NavLink></li>
            <li><NavLink to="/compte">Mon compte</NavLink></li>
            {utilisateur && (
              <li>
                <button type="button" onClick={onDeconnexion}>Se déconnecter</button>
              </li>
            )}
          </ul>
        </nav>
      </header>

      <main id="contenu">
        <Outlet />
      </main>

      <footer className="pied">
        <p><small>&copy; 2026 Bibliothèque municipale de Saint-Junien</small></p>
      </footer>
    </>
  );
}
