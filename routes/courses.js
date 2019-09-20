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
    handler: handlers.createCourse,
    options: {
      validate: {
        payload: courseSchema.create,
        failAction: (request, h, error) => {
          throw error
        }
      }
    }
  }
]

module.exports = courses
