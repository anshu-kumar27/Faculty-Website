const ErrorHandler = require('../utils/errorHandler');
const handleAsyncErrors = require('../middleware/handleAsyncErrors');
const Course = require('../models/courseModel');
const mongoose = require('mongoose');



// Create a Course
exports.createCourse = handleAsyncErrors(async (req, res, next) => {

  const { name, icon } = req.body

  const course = await Course.create({
    name,
    icon
  });

  res.status(201).json({
    success: true,
    course
  })
});

// Get all Courses
exports.getAllCourses = handleAsyncErrors(async (req, res, next) => {
  const courses = await Course.find();

  res.status(200).json({
    success: true,
    courses,
  });
});

// Get single Course
exports.getSingleCourse = handleAsyncErrors(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(new ErrorHandler("Course not found", 404));
  }

  res.status(200).json({
    success: true,
    course,
  });
});

