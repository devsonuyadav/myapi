const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb')
const _ = require("lodash");

const cors = require("cors")

var { mongoose } = require('./server/db/mongoose');
var { Todo, bio } = require('./server/models/todo');
var { User } = require('./server/models/user');

const port = process.env.PORT || 4000;


 

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        completed: true
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.send(e);
    })

});
app.get("/sky", (req, res) => {
    res.sendFile('./budgetApp/back.png', { root: __dirname });
});



app.delete("/users/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send()
    }
    User.findByIdAndDelete(id).then((success) => {
        if (!success) {
            return res.status(404).send();
        }

        res.send(success);


    }, (e) => {
        console.log(e)
    })
}
);



app.post('/newTodo', (req, res) => {
    var todo = new Todo({
        text: req.body.text,
        desc: req.body.desc,

    })

    todo.save().then((doc) => {
        res.send({ doc, done: "ok" })
    })
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({ todos, code: '1200' })
    }, (e) => { res.status(400).send(e) })
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }



    Todo.findOne({
        _id: id
    }).then((result) => {
        res.send(result);
    })



})



app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed'])
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();

    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();

    }
    else {
        body.completed = false,
            body.completedAt = null
    }

    Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((docs) => {
        if (!docs) {
            return res.status(404).send();
        }

        res.send(docs)
    })
})

app.get('/users', cors(), (req, res) => {

    const tempnoOfUsers = () => {
        return User.find().then((noOfUsers) => noOfUsers.length)

    }

    const avgAttendance = () => {
        return User.find().then((attendance) => attendance.map((some) => some.attendance).reduce((a,b) => a+b))
    }

    
   

    avgAttendance().then((usersAdded)=> {
        tempnoOfUsers().then((noOfUsers) => 
        { const average = Math.round((usersAdded/noOfUsers))
            
            User.find().then((users) => {
            res.send({ users, code: 200, noOfUsers, average });
        })}
    
       )
    })   



    // res.send({numberOfUsers})




});





app.post('/users', (req, res) => {

    var body = _.pick(req.body, ['email', 'password', 'class', 'semester', 'attendance'])
    var user = new User(body);


    user.save().then((doc) => {
        res.send(doc)
    }).catch((e) => {
        res.status(400).send(e);
    })
});





app.listen(port, () => {
    console.log(`started on port ${port}`);
});


































































/////////////////FOR BIO////////////////////////////


app.post('/newBio', (req, res) => {
    var Bio = new bio({
        name: req.body.name,
        age: req.body.age,
        edu: req.body.edu,
        salary: req.body.salary,
        married: req.body.married
    })

    Bio.save().then((docs) => {
        res.send(docs)
    }, (e) => {
        console.log(e)
    })
})

app.get('/bio', (req, res) => {
    bio.find().then((result) => {
        res.send(result);
    })
})

app.delete('/bio/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res.status(404).send({ status: 404 });
    }
    bio.findByIdAndRemove(id).then((docs) => {
        res.send(docs);
    })
})


app.patch('/bio/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['name', 'edu', 'age', 'married', 'salary']);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send({ status: 404 })
    }
    if (_.isBoolean(body.married) && body.married) {
        body.submittedAt = new Date().getTime();
    }
    else {
        body.submittedAt = null,
            body.married = false
    }

    bio.findByIdAndUpdate(id, { $set: body }, { new: true }).then((docs) => {
        if (!docs) {
            return res.status(404).send({ status: 404 });
        }

        res.send(docs);
    })
})

/////END OF BIO//////////////////////////////

























// app.patch('/todos/:id', (req,res) => {
//     var id = req.params.id;
//     var body = _.pick(req.body, ['text', 'completed']);
//     console.log(body)
// if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
// }

// if(_.isBoolean(body.completed) && body.completed){
//     body.completedAt = new Date().getTime();

// }
// else {
//     body.completed = false;
//     body.completedAt = null;
// }

// console.log(body)

// Todo.findByIdAndUpdate(id, {$set : body}, {new : true}).then((todo) => {
// if(!todo){
//    return res.status(404).send();
// }

// res.send(todo);
// })
// })

