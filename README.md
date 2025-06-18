# Amap'laneth - Site web

Ceci est la répo du site web d'Amap'laneth, une association de type AMAP basée à Angers.

## Démarrage

1. `pnpm install` (ou `npm install`) pour installer les dépendances JavaScript.
2. `composer install` pour installer les dépendances PHP.
3. `cp .env.example .env` puis `php artisan key:generate` pour créer le fichier `.env` et générer la clé d'application.
4. `php artisan migrate` pour créer la base de données.
5. `composer run dev` pour lancer le serveur Laravel, le listener de queue et Vite.

Vous pouvez également démarrer les services séparément avec `php artisan serve` et `npm run dev`.
