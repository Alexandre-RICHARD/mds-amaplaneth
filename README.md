# Amap'laneth - Site web

Ceci est la répo du site web d'Amap'laneth, une association de type AMAP basée à Angers.

## Démarrage

1. `pnpm install` (ou `npm install`) pour installer les dépendances JavaScript.
2. `composer install` pour installer les dépendances PHP.
3. `cp .env.example .env` puis `php artisan key:generate` pour créer le fichier `.env` et générer la clé d'application.
4. `php artisan migrate` pour créer la base de données.
5. `composer run dev` pour lancer le serveur Laravel, le listener de queue et Vite.

Vous pouvez également démarrer les services séparément avec `php artisan serve` et `npm run dev`.

Dans le `.env` :
APP_KEY : Clé de chiffrement utilisée par Laravel. Générée via `php artisan key:generate`
APP_URL : URL publique de l'application (ex : http://localhost:8000 en local)
APP_NAME : Nom de l’application côté Laravel
VITE_APP_NAME : Nom de l’application utilisé côté React via Vite, reprend APP_NAME, mais peut être personnalisé si nécessaire
ADMIN_PASSWORD_HASH : Mot de passe administrateur hashé avec Bcrypt. Générer avec `php artisan tinker` → `Hash::make('password')`
ADMIN_SEQUENCE : Suite de touches à saisir pour accéder au formulaire d'administration

MAIL_MAILER : Méthode d'envoi des emails. log pour enregistrer les emails dans les logs (utile en local), smtp en production.
MAIL_SCHEME : Protocole d’envoi (souvent null, sauf besoin spécifique).
MAIL_HOST : Adresse du serveur SMTP (ex : smtp.mailtrap.io, smtp.gmail.com).
MAIL_PORT : Port utilisé pour la connexion SMTP (ex : 587, 465, 2525).
MAIL_USERNAME : Nom d'utilisateur SMTP (souvent fourni par le service mail).
MAIL_PASSWORD : Mot de passe SMTP associé au nom d'utilisateur ci-dessus.
MAIL_FROM_ADDRESS : Adresse e-mail utilisée comme expéditeur des mails envoyés.
MAIL_FROM_NAME : Nom affiché comme expéditeur. Peut utiliser ${APP_NAME} pour reprendre dynamiquement le nom de l’app.
