# PCBee

PCBee Ordering Management System

## Clone the PCBee repo from GitHub

```
git clone git@github.com:chevyB/pcbee.git
```

## Installation

### 1. Install Composer

Link:
[Click here](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-composer-on-ubuntu-20-04)

Ubuntu/Mac Quick Installation:

```
sudo apt-get update
sudo apt-get install -y php-xml
sudo apt-get install -y php-curl
sudo apt-get install curl
sudo curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### 2. Install Docker

Link: [Click here](https://docs.docker.com/engine/install/)

Run

```
docker-compose up --build -d
```

### 3. Backend Setup:

Update `api/.env` file:

```python
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pcbee-db
DB_USERNAME=root
DB_PASSWORD=admin
```

Open terminal

```
cd api
composer install
php artisan key:generate
php artisan serve
```

You should be able to access: [http://localhost:8000/](http://localhost:8000/)

### 4. Frontend Setup:

Install NodeJS: Link: [Click here](https://nodejs.org/en/download/current)

Install Yarn in MAC/Ubuntu:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
```

Install in Windows:

```
npm install --global yarn
```

Run your FE

```
cd web
yarn
yarn dev
```

You should be able to access: [http://localhost:3000/](http://localhost:3000/)
