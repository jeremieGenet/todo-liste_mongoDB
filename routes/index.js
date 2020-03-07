/*
    FICHIER QUI CONTIENT LE ROUTING DE L'APPLICATION (mais la logique de chaque routes est déporté dans les controlleurs)
*/

const express = require('express'); // Déclaration d'express
const router = express.Router(); // Initialisation d'un router via express

const indexController = require('../controllers/indexController'); // Fichier qui contient la logique des routes de l'application
const editController = require('../controllers/editController'); // Fichier qui contient la logique des routes de l'application

// Route vers la racine de l'application
router.get('/', indexController.getIndex );
// Route qui permet l'ajout d'un élément à notre Todo liste
router.post('/ajouter', indexController.postIndex);
// Route qui permet de supprimer un élément de la Todo-liste (le param ":id" est un param dynamique qui représente un nombre)
router.delete('/supprimer/:id', indexController.deleteIndex)

// Route qui permet de diriger vers la page d'édition d'un élément de notre Todo-liste (le param ":id" est un param dynamique qui représente un nombre)
router.get('/editer/:id', editController.getEdit);
// Permet de modifier un élément de la page d'édition (le param ":id" est un param dynamique qui représente un nombre)
router.put('/editer/:id', editController.putEdit);




module.exports = router;