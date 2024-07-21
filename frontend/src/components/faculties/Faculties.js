import React , {useEffect} from 'react'
import './Faculties.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getFacultiesByCourse } from '../../state/actions/FacultyAction.js'
import FacultyCard from './faculty card/FacultyCard.js'
import {useParams } from 'react-router-dom'

const Faculties = () => {

    const dispatch = useDispatch()
    const { courseID } = useParams()
    const { loading, faculties , error } = useSelector(state => state.faculty)


    useEffect(() => {

        if (error) {
            dispatch(clearErrors())
        }

        dispatch(getFacultiesByCourse(courseID))

    }, [dispatch, error, courseID])

    return (
        <div className="facultiesSection">
            {
                loading
                    ?
                    <h2>LOADING</h2>
                    :
                    <div className="facultiesBody">
                        <div className="facultiesInfo">
                            <p>Shoolini prides itself on a proficient and accomplished team of faculty members. Our students learn from some of the best teachers in India. The faculty members are trained and educated at the best universities of the world such as National Cancer Institute, USA, NIH, USA, IISc and Oxford.</p>
                        </div>
                        <div className="facultiesCards">
                            {faculties && faculties.map((faculty) =>(
                                <FacultyCard faculty={faculty} key={faculty._id} />
                            )) }
                        </div>
                    </div>
            }
        </div>
    )
}

export default Faculties