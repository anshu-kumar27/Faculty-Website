import React, { useEffect, useState } from 'react'
import './Courses.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearErrors, getCourses } from '../../state/actions/CourseAction'
import CourseCard from './course card/CourseCard'

const Courses = () => {

  const dispatch = useDispatch()
  const { loading, error, courses } = useSelector(state => state.courses)

  useEffect(() => {

    if (error) {
      dispatch(clearErrors())
    }

    dispatch(getCourses())

  }, [error])

  const [transform, setTransform] = useState(0)

  const swipeRight = () => {
    const newTransform = transform - 66;

    if (transform === -66) {
      return
    }
    setTransform(newTransform)
  }

  const swipeLeft = () => {
    const newTransform = transform + 66;

    if (transform === 0) {
      return
    }
    setTransform(newTransform)
  }

  return (

    <div className="courseSection" id='course'>
      {
        loading
          ?
          <h2>LOADING</h2>
          :
          <div className="courseBody">
            <h2>Courses</h2>

            <div className="courseCards" style={{ transform: `translateX(${transform}%)` }}>
              {courses && courses.map((course) => (
                <CourseCard course={course} key={course.name} />
              ))}
            </div>
            <div className="swipeBtns">
              <div className="courseSwipeBtn" onClick={swipeLeft}>&larr;</div>
              <div className="courseSwipeBtn" onClick={swipeRight}>&rarr;</div>
            </div>

          </div>
      }
    </div>

  )
}

export default Courses