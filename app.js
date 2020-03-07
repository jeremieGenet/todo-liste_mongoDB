const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require ('method-override'); // Lib qui permet l'ajout de méthodes autres que 'POST' et 'GET' dans les formulaire html (pug, ici), soit delete, patch...
const bodyParser = require('body-parser');


require('dotenv/config'); // Récup des variables d'environements ".env" (via la lib dotenv) qui va nous servir pour la connection à la bdd

const app = express(); // Initialisation de express

// MIDDLEWARES ('use')
app.use(bodyParser.urlencoded({extended: false})); // Permet de récup le contenu (body) parsé d'une requête (middleware)
app.use(methodOverride('_method')); // Pour l'ajout de méthodes dans les formulaire
app.set('view engine', 'pug'); // Configuration comme moteur de template 'pug' pour notre application

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes); // Utilisation en middleware ("use") pour récup les routes du fichier index.js

// Connexion à la bdd
mongoose.set('useUnifiedTopology', true); // Config de mongoose avant connexion
mongoose.connect("mongodb+srv://jeremie:1664@jeremietest-z2umi.gcp.mongodb.net/test-Todo_list?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => {
    console.log('Connecté à la bdd!!!');
    }
);

// Lancement du serveur
const port = process.env.PORT || 3000; // port représent le port utilisé pour le lancement du serveur (PORT en ligne ou 3000 en local)
app.listen(port, () => console.log(`Serveur lancé sur le port ${port}!`));