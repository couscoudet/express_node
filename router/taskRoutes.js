const express = require('express');

const router = express.Router();

const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask)
router.get('/', taskController.getAllTasks)
// router.get('/:id', taskController.getTaskById)
// router.get('/undone', taskController.getUndoneTasks)
// router.get('/:text', taskController.getTasksByText)
// router.delete('/:id', taskController.deleteTask)
// router.put('/:id', taskController.modifyTask)

module.exports = router;