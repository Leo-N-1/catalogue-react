import { Routes, Route } from 'react-router';
import MiseEnPage from './components/MiseEnPage.jsx';
import RouteProtegee from './components/RouteProtegee.jsx';
import Accueil from './pages/Accueil.jsx';
import Catalogue from './pages/Catalogue.jsx';
import FicheLivre from './pages/FicheLivre.jsx';
import Connexion from './pages/Connexion.jsx';
import Compte from './pages/Compte.jsx';
import PageIntrouvable from './pages/PageIntrouvable.jsx';
// Les adresses de l'application : une route = une adresse = une page.
export default function App() {
  return (
    <Routes>
      <Route element={<MiseEnPage />}>
        <Route index element={<Accueil />} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="livres/:id" element={<FicheLivre />} />
        <Route path="connexion" element={<Connexion />} />
        <Route
          path="compte"
          element={
            <RouteProtegee>
              <Compte />
            </RouteProtegee>
          }
        />
        <Route path="*" element={<PageIntrouvable />} />
      </Route>
    </Routes>
  );
}