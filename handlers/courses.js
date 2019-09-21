const uuid4 = require('uuid/v4')
const services = require('../services/courses')

async function listCourses(request, h) {
  return request.server.app.Db.courses
}

async function createCourse(request, h) {
  let payload = request.payload
  try {
    let data = await services.saveCourse(payload)
    return h.response('New record success').code(201)
  } catch (error) {
    console.log(error)
    return h.response('Ocurrio un problema').code(500)
  }
}

module.exports = {
  listCourses,
  createCourse
}
