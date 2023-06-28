const express = require("express");
const mongoose = require("mongoose");
const Task = require('./models/Task');
const taskRoutes = require("./router/taskRoutes")
const app = express();

//Allow body access of the request
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_STRING,
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((e) => console.log('Connexion à MongoDB échouée ! : ' + e));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// app.get('/api/tasks', (req, res, next) => {
//   Task.find()
//   .then((things) => {res.status(200).json(things)})
//   .catch((e) => {res.status(400).json({ error: e })})
// })

// app.post('/api/tasks', (req, res, next) => {
//       const task = new Task({ ...req.body });
//       task.save()
//       .then(() => res.status(201).json({ message: 'Tâche ajoutée avec succès' }))
//       .catch((e) => res.status(400).json( { error : e}))
// })

app.use('/api/tasks', taskRoutes);

app.use('*', function(req, res){
  res.status(404).send('what???');
});

module.exports = app;
