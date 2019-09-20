/**
 * user = {id, name(required), lastname(required), email(required), cellphone, role_id (required, uuid)}
 * role = {id, name(required)}
 * course = {id, name(required), credits (required, number), code (required, string 5 characters), description}
 * lesson = {id, name (required), code (required, string 5 characters), description (required), approval_score (required, number), course_id (required, uuid)}
 */

module.exports = {
  courses: [],
  lessons: [],
  roles: [],
  users: []
}
