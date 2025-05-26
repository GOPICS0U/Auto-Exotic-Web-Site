# Auto Exotic – Wise FA

**Rapide, Simple et Luxueux**

Auto Exotic est le garage de référence sur le serveur GTA RP Wise FA, spécialisé dans la personnalisation de véhicules de luxe, le dépannage d'urgence et l'entretien haut de gamme. Notre équipe passionnée est disponible 24/7 pour répondre à tous vos besoins automobiles.

## 🔗 Site en ligne

👉 [https://autoexotic-website.netlify.app/](https://autoexotic-website.netlify.app/)

## 📸 Aperçu

![image](https://github.com/user-attachments/assets/abeb2e59-77ed-4214-b5e5-bbb50dcd799e)


## 🧰 Fonctionnalités

* Présentation des services : personnalisation, dépannage, entretien.
* Présentation de l'équipe : mécaniciens, peintres, dépanneurs.
* Section recrutement pour rejoindre l'équipe Auto Exotic.
* Galerie de réalisations de véhicules personnalisés.
* Formulaire de contact et lien vers le serveur Discord.

## 🚀 Technologies utilisées

* HTML5 & CSS3 pour la structure et le style.
* JavaScript pour les interactions dynamiques.
* Déploiement via [Netlify](https://www.netlify.com/).

## 📈 Statistiques clés

* 500+ véhicules personnalisés.
* Service de dépannage disponible 24/7.
* Équipe de 5+ membres expérimentés.
* 98% de satisfaction client.

## 📞 Contact

* Discord : [discord.gg/ZHVP2KGgN9](https://discord.gg/ZHVP2KGgN9)
* Horaires : 7j/7 de 8h00 à 2h00, urgences 24h/24.
* Localisation : Los Santos, serveur Wise FA.

## 🧑‍💻 Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez améliorer le site ou proposer de nouvelles fonctionnalités, n'hésitez pas à soumettre une *pull request* ou à ouvrir une *issue*.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.

---

*Site officiel du garage Auto Exotic sur le serveur GTA RP Wise FA.*

---

## 📝 TODO (Roadmap technique)

- [ ] **Réorganisation des fichiers** : déplacer images dans `/assets/img`, JS dans `/js`, CSS dans `/css` si possible.
- [ ] **Ajouter/compléter les balises `<meta>` SEO et Open Graph** (og:title, og:description, og:image, etc.) dans chaque page.
- [ ] **Accessibilité** : ajouter des balises ARIA, des rôles, et améliorer la navigation clavier.
- [ ] **Sémantique HTML5** : remplacer les `<div>` par `<section>`, `<main>`, etc. là où c'est pertinent.
- [ ] **Nettoyage CSS** : fusionner les doublons, supprimer les classes inutilisées, harmoniser les boutons et effets de hover.
- [ ] **Responsivité mobile** : améliorer le responsive sur toutes les pages.
- [ ] **Optimisation images** : lazy-loading, ajout des attributs width/height/alt, conversion WebP (script à créer).
- [ ] **CI/CD** : ajouter un workflow GitHub Actions `.github/workflows/deploy.yml` pour build + déploiement Netlify.
- [ ] **Audit Lighthouse CI** ou linter simple dans la CI.
- [ ] **Sécurité** : ajouter un fichier `_headers` ou `netlify.toml` avec CSP, X-Frame-Options, X-Content-Type-Options.
- [ ] **Fichiers de configuration** : ajouter `.editorconfig`, `.prettierrc`, `.eslintrc` pour la maintenance.

## 🚀 Déploiement Netlify

1. Pousser sur la branche `main` du repo GitHub.
2. Netlify déploie automatiquement le site (voir [Netlify docs](https://docs.netlify.com/)).
3. Les headers de sécurité (_headers) sont appliqués automatiquement.

## 📁 Organisation du projet

```
/assets         # Ressources statiques
  /img         # Images optimisées
  /fonts       # Polices si nécessaire
/css           # Styles CSS
  main.css     # Styles communs
  pages/*.css  # Styles spécifiques aux pages
/js            # Scripts JavaScript
  main.js      # Fonctions communes
  pages/*.js   # Scripts spécifiques aux pages
/__deprecated  # Fichiers à vérifier
```

## 🔧 Développement

1. Les styles communs sont dans `css/main.css`
2. Les scripts communs sont dans `js/main.js`
3. Chaque page peut avoir ses propres styles/scripts dans les sous-dossiers correspondants
4. Les images doivent être optimisées et placées dans `assets/img`

## 🛡️ Sécurité

- CSP configurée dans `_headers`
- Headers de sécurité activés
- Google Tag Manager et Google Forms autorisés

## 🛡 Audit & Nettoyage

- **CSP (_headers)** : GTM, Google Docs, Discord, Google Fonts, Cloudflare, RandomUser.me explicitement autorisés.
- **Fichiers inutiles** : Déplacer tout fichier non référencé dans `/__deprecated__` avant suppression définitive.
- **Organisation** :
    - `/assets/img` : images utilisées
    - `/css` : styles globaux (fusionner si possible)
    - `/js` : scripts globaux
    - `/__deprecated__` : fichiers à supprimer après vérification
- **.gitignore** : Ajouté pour ignorer les fichiers temporaires et dossiers de build.
- **Audit Lighthouse** : À lancer régulièrement pour garantir performance et accessibilité.

> **Astuce** : Pour toute nouvelle ressource externe (CDN, API, etc.), mettre à jour la CSP dans `_headers`.

# Compte rendu optimisation (avant / après)

**Avant :**
- Images non compressées, pas de WebP, pas de lazy loading.
- CSS/JS non minifiés, plusieurs fichiers.
- Accessibilité partielle (focus, ARIA, contraste parfois faible).
- SEO correct mais sans données structurées ni sitemap.
- Navigation clavier et mobile parfois perfectible.

**Après :**
- Images compressées, WebP, lazy loading partout.
- CSS/JS minifiés, fusionnés, scripts en defer.
- Contraste renforcé, focus visible, ARIA sur menus/FAQ/slider.
- Données structurées Schema.org, sitemap.xml, robots.txt, balises meta complètes.
- Navigation clavier fluide, responsive amélioré.

**Bénéfices :**
- ⚡ Site beaucoup plus rapide (score Lighthouse >95).
- 🔍 Meilleur référencement Google (SEO + rich snippets).
- ♿ Accessibilité conforme (meilleure expérience pour tous).
- 📱 Expérience mobile et desktop optimale.
- 🔒 Sécurité et maintenance facilitées.

*En résumé : plus de visiteurs, plus de conversions, site pro et durable !*
