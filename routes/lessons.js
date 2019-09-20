const handlers = require('../handlers/lessons')
const schema = require('../schemas/lessonSchema')

const lessons = [
  {
    method: 'GET',
    path: '/api/courses/{courseId}/lessons',
    handler: handlers.listLessons,
    options: {
      validate: {
        query: schema.query,
        params: schema.courseIdParam,
        failAction: (request, h, error) => {
          throw error
        }
      }
    }
  },
  {
    method: 'POST',
    path: '/api/courses/{courseId}/lessons',
    handler: handlers.createLesson,
    options: {
      validate: {
        payload: schema.createPayload,
        params: schema.courseIdParam,
        failAction: (request, h, error) => {
          throw error
        }
      }
    }
  }
]

module.exports = lessons
