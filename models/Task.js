const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
title: { type: String, required: true },
description: { type: String, required: false },
dueDate: { type: Date, required: false },
scheduleDates: { type: Array, required: false },
});

module.exports = mongoose.model('Task', taskSchema);