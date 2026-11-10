import CarteLivre from './CarteLivre.jsx';

export default function ListeLivres({ livres }) {
  if (livres.length === 0) {
    return <p className="aucun">Aucun livre ne correspond à votre recherche.</p>;
  }

  return (
    <ul className="livres">
      {livres.map((livre) => (
        <li key={livre.id}>
          <CarteLivre livre={livre} />
        </li>
      ))}
    </ul>
  );
}
