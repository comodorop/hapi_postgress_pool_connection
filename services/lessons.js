const pool = require('../repository/connection/index')

async function saveLesson(obj) {
    pool.query(`INSERT INTO lessons (courseid, name, description)
    VALUES ('${obj.courseId}', '${obj.name}', '${obj.description}')`).then(data => {
        pool.end()
        return 'ok'
    }).catch(err => {
        return err
        console.log(err)
    })
}


module.exports = {
    saveLesson
}