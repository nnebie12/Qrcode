# Générateur de QR Code Plateforme EHS

Ce projet est une application web React permettant de générer facilement des QR codes personnalisés pointant vers votre plateforme EHS (WordPress/Elementor ou autre). L'utilisateur peut saisir l'URL de sa plateforme, personnaliser le libellé, puis télécharger ou imprimer le QR code généré.

## Fonctionnalités

- Génération instantanée de QR code à partir d'une URL personnalisée
- Personnalisation du libellé affiché sous le QR code
- Préréglages rapides pour différentes sections de la plateforme
- Téléchargement du QR code en PNG haute résolution
- Impression directe du QR code
- Copie rapide de l'URL dans le presse-papier

## Technologies utilisées

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/) pour le style
- [lucide-react](https://lucide.dev/) pour les icônes
- [QR Server API](https://goqr.me/api/) pour la génération d'image QR

## Installation et lancement

1. **Cloner le dépôt**

```bash
git clone <url-du-repo>
cd Qrcode
```

2. **Installer les dépendances**

```bash
npm install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou le port affiché dans le terminal).

## Déploiement

Pour déployer sur Netlify, Vercel ou tout autre hébergeur de sites statiques :

- Construisez le projet :

```bash
npm run build
```

- Déployez le dossier `dist/` généré.
- Pour Netlify, ajoutez un fichier `_redirects` dans `public/` avec le contenu :
  ```
  /*    /index.html   200
  ```
  pour le support des routes SPA.

## Utilisation

1. Saisissez l'URL de votre plateforme EHS (ex : https://monsite.com/accueil)
2. Personnalisez le libellé si besoin
3. Cliquez sur "Générer le QR Code"
4. Téléchargez, imprimez ou copiez le QR code
5. Affichez-le sur site pour un accès rapide depuis un smartphone

## Remarques

- Pour que le QR code fonctionne sur mobile, l'URL doit pointer vers un site accessible publiquement (pas une adresse locale).
- Le projet ne stocke aucune donnée : tout se passe côté navigateur.

## Auteur

Développé par Kassinne Bie (2026)
