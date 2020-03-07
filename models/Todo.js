const mongoose = require('mongoose');

// Création de notre modèle pout notre bdd
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
});

// On export notre model sous le nom 'todo' (qui va être renommé par mongoose "todos", puisqu'il s'agit d'une collection)
module.exports = mongoose.model('todo', todoSchema);