const Hapi = require('@hapi/hapi')

const DB = require('./dbMemory')
const routes = require('./routes')

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: 'localhost'
})

server.app.Db = DB

async function init () {
  try {
    server.route(routes)

    await server.start()
    console.log(`Server running on port ${server.info.uri}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
