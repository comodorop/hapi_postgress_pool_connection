const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')
const services = require('../services/lessons')

async function createLesson (request, h) {
  const { courseId } = request.params
  const payload = Object.assign(request.payload, {courseId })
  try {
    let data = await services.saveLesson(payload)
    return h.response('New record success').code(201)
  } catch (error) {
    return h.response('Ocurrio un problema').code(500)
  }
}

async function listLessons (request, h) {
  const { description } = request.query
  const { courseId } = request.params
  let lessons = []
  if (description) {
    lessons = request.server.app.Db.lessons.filter((lesson) => {
      return lesson.description.toLowerCase().search(description) !== -1 && lesson.courseId === courseId
    })
  } else {
    lessons = request.server.app.Db.lessons.filter((lesson) => lesson.courseId === courseId)
  }
  return lessons || []
}

module.exports = {
  createLesson,
  listLessons
}
