const{mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

var id = "5d05126d1bb7281debc71d1f";
Todo.find({}).then((todo) => {
    console.log('Todos', todo)
});


