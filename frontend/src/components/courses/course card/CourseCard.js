import React from 'react'
import './CourseCard.css'
import img from '../../../images/e&t.png'
import {Link} from 'react-router-dom'

const CourseCard = ({course}) => {

  const {name , icon} = course



  return (
    <Link to={`/getFacultiesByCourse/${course._id}`} className="courseCard">
      <div className="courseCardBody">
        <img src={icon.url} alt="" />
        <h3>{name}</h3>
      </div>
    </Link>
  )
}

export default CourseCard