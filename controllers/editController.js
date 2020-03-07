/*
    FICHIER QUI CONTIENT LA LOGIQUE DE ROUTING DE LA PAGE D'EDITION D'UN ELEMENT DE LA TODO-liste (nouveau template à afficher)
*/

const Todo = require('../models/Todo'); // On récup notre modéle de Todo.js

// Logique de la route qui mène vers la page d'édition d'un élément de la todo-liste
const getEdit = (req, res) => {
    const {id} = req.params;
    Todo.findById(id, (err, todo) =>{
        if(err) console.log(err);
        // Rendu du template edit.pug et 2eme param l'élement de la liste à éditer (pour s'en servir dans le template)
        res.render('edit', {
            todo: todo
        }); 
    });
};

const putEdit =(req, res) => {
    const {id} = req.params;
    // "req.body.title" représente le contenu de l'input
    Todo.findByIdAndUpdate(id, {title: req.body.title}, (err) => {
        if(err) console.log(err);
        res.redirect('/'); // Si il y a une response, on redirige vers la racine de l'app
    });
};


module.exports = {
    getEdit: getEdit,
    putEdit: putEdit
};