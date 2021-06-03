require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60b275cafaede118409ea3d8', {
// }).then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((taskCount) => {
//     console.log(taskCount)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTask = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: true })
    return count
}
deleteTask('60b2747d29f8ea29344764a7').then((task) => {
    console.log(task)
}).catch((e) => {
    console.log(e)
})

