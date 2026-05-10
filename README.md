# Digital Banking Web

Application frontend Angular pour la gestion des **clients** et la consultation des **comptes bancaires** (détails + opérations paginées), connectée à un backend REST.

## Stack Technique
- Angular 19
- TypeScript
- RxJS
- Bootstrap 5 + Bootstrap Icons
- Reactive Forms
- HttpClient

## Fonctionnalités Implémentées
- Navigation via navbar et routing Angular.
- Liste des clients avec recherche par mot-clé.
- Gestion des erreurs d’appel API côté UI.
- Suppression d’un client.
- Création d’un nouveau client avec validation formulaire.
- Redirection vers la liste clients après création réussie + reset des champs.
- Consultation d’un compte par ID.
- Affichage formaté du solde et des opérations (date + montant).
- Pagination des opérations d’un compte.
- Configuration centralisée de l’URL backend via `environment`.

## Routes Frontend
- `/customers` : recherche / liste des clients.
- `/new-customer` : formulaire d’ajout client.
- `/accounts` : recherche d’un compte par ID.

## API Backend Consommée
Base URL : `http://localhost:8085`
- `GET /customers`
- `GET /customers/search?keyword=...`
- `POST /customers`
- `DELETE /customers/{id}`
- `GET /accounts/{accountId}/pageOperations?page={p}&size={s}`

## Pré-requis
- Node.js LTS
- npm
- Angular CLI (`npm i -g @angular/cli`)
- Backend API démarré sur `http://localhost:8085`

## Installation & Lancement (Windows)
Application disponible sur : `http://localhost:4200`

## Configuration
Fichier : `src/environments/environment.ts`
```ts
export const environment = {
  production: false,
  backendHost: 'http://localhost:8085'
};
```
## Appercu des pages web

<img width="720" height="330" alt="banking" src="https://github.com/user-attachments/assets/450fce10-9721-4e3b-91b8-003c71a54e98" />


## Historique des commits 
- Ajout navbar, composants customers/accounts et routage.
- Affichage liste clients + correction CORS.
- Création des services et injection des dépendances.
- Interface `Customer` + gestion affichage erreurs/liste.
- Variable d’environnement + recherche par keyword.
- Ajout client + validations.
- Suppression client.
- Validation `required` sur `name`/`email`, reset champs et redirection.
- Affichage formaté des comptes/opérations par ID.
