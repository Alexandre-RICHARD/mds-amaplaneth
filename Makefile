deploy:
	ssh -T O2Switch && cd /projects/amapRecette && git pull origin develop && make install

install: vendor/autoload.php .env public/storage public/build/manifest.json
	php artisan cache:clear
	php artisan migrate

.env:
	cp .env.example .env
	php artisan key:generate

public/storage:
	php artisan storage:link

vendor/autoload.php: composer.lock
	composer install
	touch vendor/autoload.php

public/build/manifest.json: package.json
	npm i
	npm run build
