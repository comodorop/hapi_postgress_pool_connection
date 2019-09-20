const pool = require('./repository/connection/index')

pool.query('SELECT * FROM clientes').then(data=>{
  pool.end()
  console.log(data.rows)
}).catch(err=>{
  console.log(err)
})

// pool.connect((err, client, done) => {
//   client.query('SELECT * FROM clientes', (err, resp) => {
//     client.release(true)
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(resp.rows)
//     }
//   })
// })

pool.on('connect', (error)=>{
  console.log("Hubo una conneccion")
  console.log('Total de connecciones',pool.totalCount)
})

pool.on('remove', ()=>{
  console.log("Se ha removido el pool")
})


// async function createLesson (request, h) {
//   const id = uuid4()
//   const { courseId } = request.params
//   const course = request.server.app.Db.courses.find((course) => course.id === courseId)
//   if (!course) {
//     throw Boom.notFound('courseId does not belong to any register in Courses')
//   }
//   const payload = Object.assign(request.payload, { id, courseId })
//   request.server.app.Db.lessons.push(payload)
//   return payload
// }

