/*
    FICHIER QUI CONTIENT LA LOGIQUE DE ROUTING DE L'INDEX ('/') DE L'APPLICATION
*/

const Todo = require('../models/Todo'); // On récup notre modéle de Todo.js

// Logique de la route qui mène vers la racine de notre application ('/')
const getIndex = (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err) console.log(err);
        console.log(todos);
        // Rendu par express du fichier views/index.js, et en second param on passe la liste des todo (tableau qui contient le todo de la bdd)
        res.render('index', {
            todos: todos
        }); 
    })
};

// Logique de la route qui permet de poster une todo-liste
const postIndex = (req, res) => {
    // Création d'un nouveau modéle dans lequel on insère 'req.body.title' qui représente le contenu de l'input de la todo liste (attribut name="title" de l'input)
    // newTodo va devenir : { _id: 5dqds5fqfdf5q5sdf5, title: "le contenu de l'input"}
    const newTodo = new Todo({
        title: req.body.title
    });
    //console.log(req.body.title);
    //console.log(newTodo);

    // On sauvegarde notre 'newTodo', qui est maintenant un document dans la bdd
    newTodo.save((err) => {
        if(err) console.log(err); // Condition si il y a une erreur lors de la sauvegarde de notre "newTodo"
        res.redirect('/');        // Redirection vers la racine de l'application apres l'enregistrement dans la bdd
    });
};

// Logique de la route qui permet de supprimer un élément de la todo-liste
const deleteIndex = (req, res) => {
    //console.log('delete!!!'); // Affiche delete!!! dans la console
    //console.log(req.params.id); // Affiche l'id de l'élément à supprimer (dans "params" on récup l'id passé en paramètre dans l'url)

    const {id} = req.params
    // Récup de l'élément de la liste et suppréssion
    Todo.findByIdAndDelete(id, (err) => {
        if(err) console.log(err); // Affichage de l'erreur s'il y en a une
        res.redirect('/'); // Redirection vers la racine de l'application
    });
};


module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    deleteIndex: deleteIndex
};