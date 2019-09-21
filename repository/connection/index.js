const { Pool } = require('pg')
// function connection() {
    const pool = new Pool({
        database: 'adc_hapi',
        host: 'localhost',
        user: 'root',
        password: '123456',
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
    })
    // pool.on('connect', client => {
    //     console.log("Se ha conectado")
    //     return client
    // })
// }

module.exports = pool
// module.exports = {
//     connection
// }