const express = require('express')
const { registerFaculty, getSingleFaculty, getAllFaculty , getFacultiesByCourse , getSingleFacultyByCourse } = require('../hub/facultyHub')

const router = express.Router();

// route for registering a new user
router.route('/createFaculty').post(registerFaculty)

// route for getting single user
router.route('/getSingleFaculty/:id').get(getSingleFaculty)

// route for get all users
router.route('/getAllFaculty').get(getAllFaculty)

// route for get all faculty for particular course
router.route('/getFacultiesByCourse/:courseID').get(getFacultiesByCourse)

// route for get single faculty for particular course
router.route('/courses/:courseID/faculties/:facultyID').get(getSingleFacultyByCourse);


module.exports = router;
