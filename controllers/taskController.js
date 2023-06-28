const Task = require('../models/Task');

exports.createTask = (req, res, next) => {
    const task = new Task({ ...req.body });
    task.save()
    .then(() => res.status(201).json({ message: 'Tâche ajoutée avec succès' }))
    .catch((e) => res.status(400).json( { error : e}))
}

exports.getAllTasks = (req, res, next) => {
    Task.find()
    .then((things) => {res.status(200).json(things)})
    .catch((e) => {res.status(400).json({ error: e })})
}