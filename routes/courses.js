const handlers = require('../handlers/courses')
const courseSchema = require('../schemas/courseSchema')

const courses = [
  {
    method: 'GET',
    path: '/api/courses',
    handler: handlers.listCourses
  },
  {
    method: 'POST',
    path: '/api/courses',
    handler: handlers.createCourse
  }
]

module.exports = courses
