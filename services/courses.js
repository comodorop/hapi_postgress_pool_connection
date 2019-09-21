const pool = require('../repository/connection/index')

async function saveCourse(obj) {
    pool.query(`INSERT INTO courses (name, description) VALUES ('${obj.name}', '${obj.description}')`).then(data => {
        pool.end()
        return 'ok'
    }).catch(err => {
        return err
        console.log(err)
    })
}


module.exports = {
    saveCourse
}