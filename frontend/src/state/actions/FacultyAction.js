import axios from "axios";

import { ALL_FACULTY_REQUEST, ALL_FACULTY_SUCCESS, ALL_FACULTY_FAIL, SINGLE_FACULTY_REQUEST, SINGLE_FACULTY_SUCCESS , SINGLE_FACULTY_FAIL, CLEAR_ERRORS } from '../constants/FacultyConstant'

export const getFacultiesByCourse = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_FACULTY_REQUEST
    });

    const { data } = await axios.get(`/uni/faculty/getFacultiesByCourse/${id}`);

    dispatch({
      type: ALL_FACULTY_SUCCESS,
      payload: data.faculties
    });
  } catch (error) {
    dispatch({
      type: ALL_FACULTY_FAIL,
      payload: error.response.data.message
    });
  }
};

export const getFacultyInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SINGLE_FACULTY_REQUEST
    });
    
    const { data } = await axios.get(`/uni/faculty/getSingleFaculty/${id}`);
    
    dispatch({
      type: SINGLE_FACULTY_SUCCESS,
      payload: data.faculty
    });
  } catch (error) {
    dispatch({
      type: SINGLE_FACULTY_FAIL,
      payload: error.response.data.message
    });
  }
};


export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};