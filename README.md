# 🦋 Martinese Fitness - PWA

Application fitness personnelle pour Martinese - Transformation **86kg → 75kg** en 8 semaines.

## 🎯 Caractéristiques

- ✨ **Design moderne** avec palette violet élégante et glassmorphism
- 📱 **Progressive Web App** - Fonctionne offline, installable sur mobile
- 🦋 **Animations de papillons** élégantes et discrètes
- 💪 **Programme hebdomadaire** complet avec exercices détaillés
- 📊 **Suivi de progression** avec streak de jours consécutifs
- 🎨 **Optimisé iOS** - Parfait pour iPhone et Safari
- 💾 **100% client-side** - Pas de backend, données en localStorage

## 🚀 Installation

### Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Installation sur mobile (iOS)

1. Ouvrir l'application dans Safari
2. Appuyer sur le bouton Partager (icône carré avec flèche)
3. Sélectionner "Sur l'écran d'accueil"
4. Confirmer l'installation

## 📋 Programme hebdomadaire

### Lundi - Force (25 min)
- Seated Leg Raises (12-15 reps)
- Knee Lifts with Downward Presses (12 reps)
- Elbow to Knee (10-12 reps/côté)
- Step-ups (12 reps/jambe)
- In and Out Crunches (12-15 reps)
- Squats (12-15 reps)

### Mardi - Cardio (30 min)
- Glute Bridges (12-15 reps)
- Plank (3 × 30s)
- Side Leg Raises (12-15 reps)
- Mountain Climbers (30s)
- In and Out Crunches (12-15 reps)
- Step Touch Cardio (1 minute)

### Mercredi - Force (25 min)
- Squats Sumo (12-15 reps)
- Step-ups (12 reps/jambe)
- Seated Leg Raises (12-15 reps)
- Plank Genoux Alternés (30s)
- Elbow to Knee (10-12 reps/côté)
- Lift Arms Stepping (1 minute)

### Jeudi - Repos
- Étirements légers
- Récupération

### Vendredi - Force (28 min)
- Circuit complet similaire aux autres jours

### Samedi - Cardio Salle (30 min)
- Tapis de course (20-30 min)
- Vélo (20-30 min)
- Corde à sauter (10-15 min)

### Dimanche - Repos actif (20 min)
- Marche (20-30 min)
- Étirements

## 🎨 Design System

### Palette de couleurs

```css
--background: #F5EDFF      /* Fond clair violet */
--secondary: #D6C2FF       /* Cartes */
--primary: #9B5DE5         /* Violet principal */
--primary-dark: #6A0DAD    /* Violet profond */
--primary-darker: #4A0D67  /* Violet nuit */
```

### Effets visuels
- Glassmorphism avec `backdrop-filter: blur(20px)`
- Ombres douces avec opacité violet
- Animations fluides (200-300ms)
- Micro-interactions au toucher

## 📁 Structure du projet

```
Marty/
├── index.html           # Page principale
├── style.css            # Styles avec design system violet
├── app.js              # Logique principale de l'application
├── program.js          # Données du programme hebdomadaire
├── exercises.js        # Détails des exercices avec emojis
├── manifest.json       # Configuration PWA
├── service-worker.js   # Cache offline
├── package.json        # Dépendances
└── public/             # Icônes et assets
```

## 💾 Stockage local

L'application utilise `localStorage` pour sauvegarder :
- ✅ Séances complétées
- 🔥 Streak de jours consécutifs
- 📊 Historique de progression

## 🌟 Fonctionnalités

### Écrans principaux

1. **Accueil** - Vue d'ensemble avec objectif et programme de la semaine
2. **Séance** - Liste des exercices du jour avec durée
3. **Exercice** - Démonstration (emoji), répétitions et conseils de posture
4. **Motivation** - Conseils quotidiens aléatoires

### Timer intégré
- 30 secondes de travail
- 15 secondes de repos
- Alternance automatique

### Notifications motivantes
Messages personnalisés :
- 💧 Hydratation
- 🍎 Nutrition
- 😴 Sommeil
- 💪 Encouragement

## 🦋 Papillons

Les papillons apparaissent :
- Sur l'écran d'accueil (animation subtile)
- À la fin d'une séance (célébration)
- Dans l'icône de l'application

## 🔧 Technologies

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec variables CSS
- **JavaScript Vanilla** - Pas de framework
- **Service Worker** - Mode offline
- **Web App Manifest** - Installation PWA
- **localStorage** - Persistance des données

## 📱 Optimisations iOS

- `viewport-fit=cover` pour iPhone X+
- `user-scalable=no` pour expérience native
- `apple-mobile-web-app-capable` pour mode standalone
- Safe area insets pour les encoches
- `-webkit-backdrop-filter` pour Safari

## 🎯 Objectif

**Perte de poids : 86kg → 75kg**  
**Durée : 8 semaines**  
**Méthode : Programme structuré + suivi quotidien**

## 📝 Notes

- Application 100% côté client
- Pas de backend requis
- Pas d'authentification
- Données privées stockées localement
- Fonctionne offline après première visite

## 🚀 Déploiement

Pour déployer sur un serveur web, il suffit de copier tous les fichiers dans le répertoire public du serveur. L'application est statique et ne nécessite aucune configuration serveur particulière.

---

**Créé avec 💜 pour Martinese**
