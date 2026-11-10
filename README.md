# Catalogue de la bibliothèque

Application React du catalogue de la **bibliothèque municipale de Saint-Junien**.

- **Client** : la bibliothèque municipale
- **Équipe** : Nathan et Léo
- **Dépôt** : https://github.com/Leo-N-1/catalogue-react

## Lancer le projet

Il faut Node.js 24 (ou 22.22 et plus).

```bash
npm install
npm run dev
```

L'application s'ouvre sur http://localhost:5173. Compte de test : `lea.martin@exemple.fr`, mot de passe `lecture`.

## Où est quoi

| Dossier | Contenu |
|---|---|
| `src/pages/` | Une page par adresse : accueil, catalogue, fiche d'un livre, connexion, compte |
| `src/components/` | Les composants réutilisés : la carte d'un livre, la liste, les filtres, la mise en page |
| `src/contexts/` | L'état partagé par toute l'application. **Trois bouchons** vous attendent : ce sont vos tickets |
| `src/data/` | Les livres et les adhérents |
| `public/couvertures/` | Les couvertures des livres |

## Comment on travaille ici

1. **`main` fonctionne toujours.** On ne pousse jamais directement dessus.
2. **Un ticket, une branche.** Son nom reprend le ticket : `bib-1-contexte-connexion`.
3. **Des messages de commit qui disent quoi** : `BIB-1 : le contexte de connexion`.
4. **Une pull request par ticket**, relue par l'autre développeur avant d'être fusionnée.
5. **Après chaque fusion**, tout le monde se remet à jour : `git switch main`, puis `git pull`.

Les tickets sont dans [TICKETS.md](TICKETS.md).
