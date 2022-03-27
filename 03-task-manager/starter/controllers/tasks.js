const getAllTasks = (req, res) => {
    res.send("all items");
}

const createTask = (req, res) => {
    res.send("create items");
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
