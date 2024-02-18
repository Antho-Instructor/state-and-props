<h1 align="center">Welcome to state-and-props 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Une simple application de liste de tâches pour pratiquer l'utilisation des `props` et du `state` en React.

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

## Par où commencer ?

Vous devez cloner le projet sur votre machine. Ensuite, vous pouvez lancer le projet avec la commande `npm run dev`.

### Exercice : Création d'une liste de tâches

#### Objectif :

-   Comprendre et mettre en pratique l'utilisation des `props` et du `state` en React.
-   Créer un composant de liste de tâches interactif.

#### Instructions :

1. Créez un composant `Task` qui représente une tâche individuelle. Ce composant devrait recevoir deux `props` :

    - `taskName`: le nom de la tâche à afficher.
    - `isCompleted`: un booléen indiquant si la tâche est terminée ou non.

2. Dans le composant `Task`, affichez le nom de la tâche. Si la tâche est terminée, appliquez un style différent pour indiquer qu'elle est complétée.

3. Créez un composant `TaskList` qui contient une liste de tâches. Ce composant devrait avoir un `state` qui stocke un tableau d'objets représentant les tâches. Chaque objet devrait avoir une propriété `name` pour le nom de la tâche et `completed` pour indiquer si elle est terminée ou non.

4. Initialisez le `state` de `TaskList` avec quelques tâches de test.

5. Dans `TaskList`, mappez le tableau de tâches du `state` pour rendre dynamiquement un composant `Task` pour chaque tâche dans la liste. Passez les bonnes `props` à chaque `Task` pour afficher le nom de la tâche et son état de complétion.

#### Bonus 🎁 :

6. Ajoutez une fonctionnalité pour marquer une tâche comme terminée lorsque l'utilisateur clique dessus. Vous devrez mettre à jour l'état approprié dans le `state` de `TaskList`.

7. Ajoutez également la possibilité d'ajouter de nouvelles tâches à la liste. Créez un formulaire simple dans `TaskList` pour cela.

8. Ajoutez une fonctionnalité pour supprimer une tâche de la liste.

#### Conseils 🧑‍🏫 :

-   Commencez par planifier la structure de vos composants et les données nécessaires.
-   Utilisez les `props` pour transmettre des données de composant en composant.
-   Utilisez le `state` pour stocker les données qui peuvent changer et affecter le rendu des composants.
-   Divisez votre application en composants réutilisables pour une meilleure gestion et maintenance du code.

Bon travail !

## Author

👤 **Anthony Gorski**

## Show your support

Met un ⭐️ si ce projet t'a plu et t'as aidé à apprendre !
