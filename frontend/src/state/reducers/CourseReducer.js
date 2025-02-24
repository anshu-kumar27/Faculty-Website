import { ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, ALL_COURSE_FAIL, CLEAR_ERRORS } from '../constants/CourseConstant'

export const courseReducer = (
    (state = { courses: [] },
        action) => {
        switch (action.type) {
            case ALL_COURSE_REQUEST:

                return {
                    loading: true,
                    courses: [],
                }

            case ALL_COURSE_SUCCESS:

                return {
                    loading: false,
                    courses: action.payload,
                }

            case ALL_COURSE_FAIL:

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