# Carte aux trésors
Cette application de carte aux trésors réaliser a été réalisé par Alexandre BAUDRY

## Installation et lancement du projet 

### Installation 
Les .env
```txt
Création d'un .env à la racine 
Création d'un .env dans le dossier back 

Il y a des .env.example si besoin !
```

Les commandes docker
```bash
docker compose up -d 
```

lancer le serveur 
```bash
docker compose exec back npm install
```
```bash
docker compose exec back npm run start
```

lancer le front
```bash
docker compose exec front npm install
```
```bash
docker compose exec front npm run dev
```