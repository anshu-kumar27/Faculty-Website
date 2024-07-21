import React from 'react'
import './FacultyCard.css'
import img from '../../../images/pf4.jpeg'
import { Link } from 'react-router-dom'

const FacultyCard = ({ faculty }) => {
  return (

    <div className="facultyCard">
      <div className="facultyCardBody">
        <div className="facultyCardTop">
          <img src={faculty.images[0].url} alt="" />
        </div>
        <div className="facultyCardMiddle">
          <h4>{faculty.post}</h4>
          <h2>{faculty.firstName + " " + faculty.lastName}</h2>
          <strong>{faculty.role}</strong>
        </div>
        <div className="facultyCardBottom">
          <Link to={`/facultyInfo/${faculty._id}`} className="button">view profile</Link>
        </div>
      </div>
    </div>

  )
}

export default FacultyCard