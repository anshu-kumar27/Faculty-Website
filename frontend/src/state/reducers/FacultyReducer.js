import { ALL_FACULTY_REQUEST, ALL_FACULTY_SUCCESS, ALL_FACULTY_FAIL, SINGLE_FACULTY_REQUEST, SINGLE_FACULTY_SUCCESS , SINGLE_FACULTY_FAIL, CLEAR_ERRORS } from '../constants/FacultyConstant'

export const facultyReducer = (
    (state = { faculties: [] },
        action) => {
        switch (action.type) {
            case ALL_FACULTY_REQUEST:

                return {
                    loading: true,
                    faculties: [],
                }

            case ALL_FACULTY_SUCCESS:

                return {
                    loading: false,
                    faculties: action.payload,
                }

            case ALL_FACULTY_FAIL:

                return {
                    loading: false,
                    error: action.payload,
                }

            case CLEAR_ERRORS:

                return {
                    ...state,
                    error: null,
                }

            default:
                return state
        }

    }
)

export const facultyInfoReducer = (
    (state = { faculty: {} },
        action) => {
        switch (action.type) {
            case SINGLE_FACULTY_REQUEST:

                return {
                    loading: true,
                    ...state,
                }

            case SINGLE_FACULTY_SUCCESS:

                return {
                    loading: false,
                    faculty: action.payload,
                }

            case SINGLE_FACULTY_FAIL:

                return {
                    loading: false,
                    error: action.payload,
                }

            case CLEAR_ERRORS:

                return {
                    ...state,
                    error: null,
                }

            default:
                return state
        }

    }
)