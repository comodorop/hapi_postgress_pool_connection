const Joi = require('@hapi/joi')

module.exports = {
  createPayload: {
    name: Joi.string().min(10).max(200).required(),
    code: Joi.string().min(1).max(5).required(),
    description: Joi.string().min(1).max(500).required(),
    approvalScore: Joi.number().integer().strict().required()
  },
  courseIdParam: {
    courseId: Joi.string().guid().required()
  },
  query: {
    description: Joi.string().min(1).max(200)
  }
}
