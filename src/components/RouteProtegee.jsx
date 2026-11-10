import { Navigate, useLocation } from 'react-router';

// Une page réservée : sans utilisateur connecté, on part vers la connexion,
// en retenant d'où l'on venait pour y revenir après.
export default function RouteProtegee({ utilisateur, children }) {
  const location = useLocation();

  if (!utilisateur) {
    return <Navigate to="/connexion" replace state={{ depuis: location.pathname }} />;
  }

  return children;
}
