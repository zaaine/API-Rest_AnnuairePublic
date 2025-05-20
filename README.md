# Annuaire Public

https://github.com/user-attachments/assets/e568a202-7992-42c3-9933-69548ac66824

![localhost_3000_](https://github.com/user-attachments/assets/9adc5947-6304-4616-b5b8-a45f3d628c8a)

![License](https://img.shields.io/badge/license-MIT-blue.svg) <!-- Update with your license -->

Une application web moderne pour gérer un annuaire de contacts ou d'entreprises. Cette application permet de créer, lire, mettre à jour et supprimer des contacts, ainsi que de rechercher et filtrer des données de manière intuitive.
J'ai pensé cette application pour un usage public ou communautaire consultable depuis une base de donnée partagée.

---

## Table des matières

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
- [Technologies utilisées](#technologies-utilisées)
- [Structure du projet](#structure-du-projet)
- [Contribution](#contribution)
- [Licence](#licence)

---

## Présentation

L'**Annuaire Public** est une application web que j'ai entièrement développée, du serveur aux vues, en passant par la gestion des routes. Ce projet m'a permis de mettre en pratique et de consolider mes compétences en développement **backend** et **frontend**.

### Compétences mobilisées

- **Backend** :

  - Conception et mise en place d'un serveur avec **Node.js** et **Express.js**.
  - Création d'une **API RESTful** pour gérer les opérations CRUD (Création, Lecture, Mise à jour, Suppression) sur les contacts.
  - Utilisation de **Mongoose** pour modéliser les données et interagir avec une base de données **MongoDB**.
  - Gestion des middlewares tels que **body-parser** pour traiter les requêtes HTTP et **method-override** pour supporter les méthodes PUT et DELETE.
  - Utilisation des **codes de statut HTTP** pour une gestion précise des réponses de l'API.

- **Frontend** :
  - Développement d'une interface utilisateur responsive avec **EJS** (Embedded JavaScript) pour générer des vues dynamiques.
  - Intégration de **Bootstrap** pour un design moderne et une expérience utilisateur optimale sur tous les appareils.
  - Création de formulaires interactifs pour ajouter, modifier et supprimer des contacts.

### Évolutivité

Ce projet est conçu pour être **évolutif**. Il peut être enrichi avec de nouvelles fonctionnalités, telles que :

- Une authentification utilisateur pour sécuriser l'accès à l'annuaire.
- Une pagination pour gérer un grand nombre de contacts.
- Des fonctionnalités de recherche et de filtrage plus avancées.
- Une intégration avec d'autres services ou API externes.

## L'**Annuaire Public** est une base solide pour construire des applications plus complexes tout en démontrant mes compétences en développement full-stack.

## Fonctionnalités

- **CRUD complet** : Création, lecture, mise à jour et suppression d'entrées.
- **Recherche avancée** : Recherche d'entrées par nom, prénom, email.
- **Filtrage dynamique** : Affichage des entrées selon des critères spécifiques (nom,prénom, email).
- **API RESTful** : Accès aux données via une API pour une intégration transparente.
- **Interface utilisateur responsive** : Conçue avec Bootstrap pour une expérience utilisateur optimale sur tous les appareils.
- \*\*Les views serveur sont servit par EJS.

---

## Installation

Suivez ces étapes pour installer et exécuter l'application localement :

1. **Cloner le dépôt :**
   ```bash
   git clone [https://github.com/zaaine/annuaire-public.git](https://github.com/zaaine/API-Rest_AnnuairePublic.git)
   ```

---

2.**Lancer le Projet :**

- **MongoDB** : ouvrir MongoDBCompass et créer une Nouvelle connection sur le port 27017 (par defaut), créer une collection nomée carnet-adresses avec le user Admin.
- **NPM** : intallation des modules avec "npm install" puis lancer la commande "npx nodemon index.js".

  ## Technologies utilisées

- **Node.js** : Environnement d'exécution JavaScript côté serveur pour construire des applications scalables.
- **Express.js** : Framework web minimaliste et flexible pour Node.js, utilisé pour gérer les routes et les middlewares.
- **Mongoose** : Bibliothèque ODM (Object Data Modeling) pour MongoDB, facilitant la gestion des schémas et des requêtes.
- **EJS** : Moteur de template pour générer des vues HTML dynamiques.
- **Bootstrap** : Framework CSS pour créer des interfaces utilisateur modernes et responsives.
- **Body-parser** : Middleware pour analyser les corps de requêtes HTTP (par exemple, JSON, URL-encoded).
- **Method-override** : Middleware pour supporter les méthodes HTTP supplémentaires (comme PUT ou DELETE) dans les formulaires HTML.
- **HTTP Status Codes** : Bibliothèque pour utiliser des codes de statut HTTP de manière descriptive dans votre application.
- **Nodemon** : Outil pour redémarrer automatiquement le serveur lors de modifications du code, utile pendant le développement.

---

![localhost_3000_createContact](https://github.com/user-attachments/assets/b596b113-b199-431b-858b-bb7853ac8661)
![localhost_3000_searchContact](https://github.com/user-attachments/assets/eb6a52bc-3175-4dfa-9478-271cac3e234f)
