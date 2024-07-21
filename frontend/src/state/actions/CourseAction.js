import axios from "axios";

import {
  ALL_COURSE_REQUEST,
  ALL_COURSE_SUCCESS,
  ALL_COURSE_FAIL,
  CLEAR_ERRORS
} from '../constants/CourseConstant';

export const getCourses = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_COURSE_REQUEST
    });

    const { data } = await axios.get(`/uni/courses/courses`);

    dispatch({
      type: ALL_COURSE_SUCCESS,
      payload: data.courses
    });
  } catch (error) {
    dispatch({
      type: ALL_COURSE_FAIL,
      payload: error.response.data.message
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
