# Les tickets

**La demande du client.** La bibliothèque veut que ses adhérents préparent leur visite : choisir des livres dans le catalogue, et les retrouver dans une **liste d'emprunts**. Trois livres au plus, chacun une fois. La liste doit être encore là quand on revient sur le site.

Le lead technique a découpé le travail en **sept tickets**, sur trois sprints. Dans chaque sprint, A et B travaillent **en même temps**, chacun sur sa branche.

| Ticket | Sprint | Pour | Branche |
|---|:--:|:--:|---|
| BIB-1 · Le contexte de connexion | 1 | A | `bib-1-contexte-connexion` |
| BIB-2 · Les composants lisent la connexion | 1 | B | `bib-2-lire-la-connexion` |
| BIB-3 · Le reducer et le contexte de la liste | 2 | B | `bib-3-reducer-liste` |
| BIB-4 · Le bouton, le compteur, la page « Ma liste » | 2 | A | `bib-4-bouton-compteur-page` |
| BIB-5 · Le bouton sur la fiche d'un livre | 2 | B | `bib-5-bouton-fiche` |
| BIB-6 · La liste survit au rechargement | 3 | A | `bib-6-memoire` |
| BIB-7 · Le compte affiche la liste | 3 | B | `bib-7-compte` |

---

## Sprint 1 · La connexion, sans prop drilling

### BIB-1 · Le contexte de connexion (A)

**Pourquoi.** Aujourd'hui, l'utilisateur connecté vit dans `App` et descend de composant en composant par les props. On veut qu'il soit lisible partout.

**À faire.** Remplacer le bouchon `src/contexts/AuthContext.jsx` par le vrai contexte, et le fournir à toute l'application. Étapes 1 et 2 de la fiche.

**Fichiers touchés.** `src/contexts/AuthContext.jsx`, `src/main.jsx`.

**C'est fini quand :**
- [ ] `useAuth()` renvoie `utilisateur`, `connecter` et `deconnecter`, comme le dit le contrat
- [ ] Un `AuthProvider` apparaît au-dessus d'`App` dans l'onglet *Components*

### BIB-2 · Les composants lisent la connexion (B)

**Pourquoi.** `App` distribue l'utilisateur à quatre composants. Chacun doit aller le chercher lui-même.

**À faire.** `App`, la mise en page, la route protégée, la connexion et le compte lisent `useAuth()`. Étape 3 de la fiche.

**Fichiers touchés.** `src/App.jsx`, `src/components/MiseEnPage.jsx`, `src/components/RouteProtegee.jsx`, `src/pages/Connexion.jsx`, `src/pages/Compte.jsx`.

**C'est fini quand :**
- [ ] `App` n'a plus aucun état et ne passe plus aucune prop
- [ ] L'application s'affiche sans erreur dans la console

---

## Sprint 2 · La liste d'emprunts

### BIB-3 · Le reducer et le contexte de la liste (B)

**Pourquoi.** Les règles de la liste (trois livres au plus, pas de doublon) doivent être écrites à un seul endroit.

**À faire.** Remplacer les bouchons `src/contexts/listeReducer.js` et `src/contexts/ListeContext.jsx`, et fournir la liste à toute l'application. Étapes 4 et 5 de la fiche.

**Fichiers touchés.** `src/contexts/listeReducer.js`, `src/contexts/ListeContext.jsx`, `src/main.jsx`.

**C'est fini quand :**
- [ ] Le reducer, testé dans la console, refuse un doublon
- [ ] `useListe()` renvoie les six valeurs du contrat

### BIB-4 · Le bouton, le compteur, la page « Ma liste » (A)

**Pourquoi.** L'adhérent doit pouvoir ajouter un livre depuis le catalogue, voir combien il en a choisi, et gérer sa liste.

**À faire.** Un composant `BoutonListe` sur chaque carte, un compteur dans le menu, une page « Ma liste » à l'adresse `/ma-liste`. Étapes 6, 7 et 8 de la fiche.

**Fichiers touchés.** `src/components/BoutonListe.jsx` (nouveau), `src/components/CarteLivre.jsx`, `src/components/MiseEnPage.jsx`, `src/pages/MaListe.jsx` (nouveau), `src/App.jsx`.

**C'est fini quand :**
- [ ] Avec le bouchon : *Clean Code* est « Dans ma liste », le compteur dit 1, la page « Ma liste » l'affiche
- [ ] Aucune erreur dans la console

### BIB-5 · Le bouton sur la fiche d'un livre (B)

**Pourquoi.** On doit aussi pouvoir ajouter un livre depuis sa fiche.

**À faire.** Réutiliser `BoutonListe`, écrit par A, sur la fiche. Étape 9 de la fiche. **Après** la fusion de BIB-3 et de BIB-4.

**Fichiers touchés.** `src/pages/FicheLivre.jsx`.

**C'est fini quand :**
- [ ] Sur la fiche, le bouton est dans le même état que sur la carte

---

## Sprint 3 · La mémoire

### BIB-6 · La liste survit au rechargement (A)

**Pourquoi.** Un adhérent qui recharge la page perd sa liste.

**À faire.** Enregistrer la liste dans `localStorage`, et la relire au démarrage. Étape 10 de la fiche.

**Fichiers touchés.** `src/contexts/ListeContext.jsx`.

**C'est fini quand :**
- [ ] Trois livres, `F5` : ils sont toujours là
- [ ] Une valeur abîmée dans `localStorage` ne fait pas planter la page

### BIB-7 · Le compte affiche la liste (B)

**Pourquoi.** La page « Mon compte » doit rappeler combien de livres sont dans la liste.

**À faire.** La page du compte lit deux contextes. Étape 11 de la fiche.

**Fichiers touchés.** `src/pages/Compte.jsx`.

**C'est fini quand :**
- [ ] Connecté, avec deux livres : « 2 livres dans votre liste d'emprunts »
