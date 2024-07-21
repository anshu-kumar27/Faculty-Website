const ErrorHandler = require('../utils/errorHandler');
const handleAsyncErrors = require('../middleware/handleAsyncErrors');
const Faculty = require('../models/facultyModel');
const Course = require('../models/courseModel')

// Register a faculty
exports.registerFaculty = handleAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password, description, images, role , post , courses } = req.body;

  const courseIds = courses.map(courseObj => courseObj.course);

  const faculty = await Faculty.create({
    firstName,
    lastName,
    email,
    password,
    description,
    images,
    role,
    post,
    courses : courseIds
  });

  res.status(201).json({
    success : true,
    faculty
  })
});

// Get all faculties
exports.getAllFaculty = handleAsyncErrors(async (req, res, next) => {
  const faculties = await Faculty.find();

  res.status(200).json({
    success: true,
    faculties,
  });
});

// Get single faculty
exports.getSingleFaculty = handleAsyncErrors(async (req, res, next) => {
  const facultyID = req.params.id
  const faculty = await Faculty.findById(facultyID);

  if (!faculty) {
    return next(new ErrorHandler(`Faculty does not exist with Id: ${facultyID}`));
  }

  res.status(200).json({
    success: true,
    faculty,
  });
});

// Get faculties for a specific course
exports.getFacultiesByCourse = handleAsyncErrors(async (req, res, next) => {
  const courseId = req.params.courseID;

  // Find the course by ID
  const course = await Course.findById(courseId);

  if (!course) {
      return next(new ErrorHandler(`Course does not exist with ID: ${courseId}`));
  }

  // Populate the faculties based on the course's faculties array
  const faculties = await Faculty.find({ courses: courseId });

  res.status(200).json({ success: true, faculties });
});


// Get a single faculty from a specific course
exports.getSingleFacultyByCourse = handleAsyncErrors(async (req, res, next) => {
  const { courseID, facultyID } = req.params;

    // Find the faculty by ID
    const faculty = await Faculty.findById(facultyID);

    if (!faculty) {
      return next(new ErrorHandler(`Faculty does not exist with Id: ${facultyID}`));
    }

    // Get the course IDs associated with the faculty
    const courseIds = faculty.courses.map(course => course.toString());

    // Check if the specified courseID is associated with the faculty
    if (!courseIds.includes(courseID)) {
      return next(new ErrorHandler(`Course with Id ${courseID} is not associated with Faculty ${facultyID}`));
    }

    // Fetch the course details
    const course = await Course.findById(courseID);

    if (!course) {
      return next(new ErrorHandler(`Course does not exist with Id: ${courseID}`));
    }

    res.status(200).json({
      success: true,
      faculty,
      course,
    });
});
