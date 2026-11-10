import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthContext.jsx';

// Une page réservée : sans utilisateur connecté, on part vers la connexion,
// en retenant d'où l'on venait pour y revenir après.
export default function RouteProtegee({ children }) {
  const { utilisateur } = useAuth();

  if (!utilisateur) {
    return <Navigate to="/connexion" replace state={{ depuis: location.pathname }} />;
  }

  return children;
}
