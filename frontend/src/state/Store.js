import {legacy_createStore as createStore , combineReducers , applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {courseReducer} from './reducers/CourseReducer'
import { facultyInfoReducer, facultyReducer } from './reducers/FacultyReducer'

const reducers = combineReducers({
    courses : courseReducer,
    faculty : facultyReducer,
    facultyInfo : facultyInfoReducer
})

const intialState = {

}

const middleware = [thunk]

const store = createStore(
    reducers,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store