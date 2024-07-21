const express = require('express')
const { createCourse , getAllCourses , getSingleCourse } = require('../hub/courseHub')

const router = express.Router();

// route for registering a new user
router.route('/createCourse').post(createCourse)

// Get all courses
router.route('/courses').get(getAllCourses);

// Get a single course by ID
router.route('/courses/:id').get(getSingleCourse);

// // Get all faculties related to a course
// router.route('/courses/:id/faculties').get(getAllFacultiesForCourse);

// // Get a single faculty related to a course
// router.route('/courses/:courseId/faculties/:facultyId').get(getSingleFacultyForCourse);


module.exports = router;
