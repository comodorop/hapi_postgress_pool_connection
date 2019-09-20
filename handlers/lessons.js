const uuid4 = require('uuid/v4')
const Boom = require('@hapi/boom')

async function createLesson (request, h) {
  const id = uuid4()
  const { courseId } = request.params
  const course = request.server.app.Db.courses.find((course) => course.id === courseId)
  if (!course) {
    throw Boom.notFound('courseId does not belong to any register in Courses')
  }
  const payload = Object.assign(request.payload, { id, courseId })
  request.server.app.Db.lessons.push(payload)
  return payload
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
