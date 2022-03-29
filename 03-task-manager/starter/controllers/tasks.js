const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
}

const createTask = (req, res) => {
    // const task = await Task.create(req.body)
    // res.status(201).json({ task })
}

const getTask = (req, res) => {
    res.send("get items");
}

const updateTask = (req, res) => {
    res.send("update items");
}

const deleteTask = (req, res) => {
    res.send("delete items");
}

const editTask = (req, res) => {
    res.send("edit items");
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
    editTask
}
