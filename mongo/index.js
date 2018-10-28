const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Schema = mongoose.Schema;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('success on connect')
});

const userSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    email: String,
    password: String,
    name: String,
   // tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]

});

const taskSchema = new Schema({
    _id : Schema.Types.ObjectId,
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, //???
    text:String,
    // deadline: String,
    // status: String,
    // createdAt: mongoose.Schema.Types.Date
})

const User = mongoose.model('User', userSchema)
const Task = mongoose.model('Task', taskSchema)

// var owner = new User({
//     _id: new mongoose.Types.ObjectId(),
// });

// owner.save(function (err) {
//     if (err) return handleError(err);
//
//     var task = new Task({
//         owner: owner._id    // assign the _id from the person
//     });
//
//     task.save(function (err) {
//         if (err) return handleError(err);
//     });
// });


// Task.findOne({_id: 123})
//     .populate('owner')
//     .exec(function(err, post) {
//
//     });

const express = require('express');
const cors  = require('cors')
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
// GraphQL schema
//
var schema = buildSchema(`
    type Query {
        getUserById(_id: String!): User
        getTaskById(_id:String!): Task
    }
    type Mutation {
        createUser(email: String!, name: String!, password: String!, tasks: [String]): User
        createTask(text: String!) : Task
    }

    type User {
        email: String
        name: String
        tasks: [String]
    }
     type Task {
     id: String
     text: String
    }
`);


async function getTaskById({_id}){
    return await Task.findOne(({_id}))
}
async function getTaskByOwner({_owner}){
    return await Task.findOne({_owner})
}

async function createUser(params){
    return await (new User(params)).save()
}
async function createTask(params){
    return await (new Task(params)).save()
}

// Root resolver
var root = {
    getTaskById,
    getTaskByOwner,
    createUser,
    createTask
};



// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors())

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));