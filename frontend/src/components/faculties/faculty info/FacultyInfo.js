import React, { useEffect } from 'react';
import './FacultyInfo.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getFacultyInfo } from '../../../state/actions/FacultyAction.js';
import { useParams } from 'react-router-dom';

const FacultyInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, error, faculty } = useSelector((state) => state.facultyInfo);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getFacultyInfo(id));
  }, [dispatch, error, id]);

  return (
    <div className="facultyInfoSection">
      {loading ? (
        <h2>LOADING</h2>
      ) : (
        <div className="facultyInfoBody">
          <div className="facultyInfoBodyTop">
            <div className="left">
              <div className="leftBox">
                <h1>{faculty && faculty.firstName}</h1>
                <h1>{faculty && faculty.lastName}</h1>
              </div>
              <h3>Professor</h3>
            </div>
            <div className="right">
              <img src={faculty && faculty.images && faculty.images[0].url} alt={`${faculty.firstName} ${faculty.lastName}`} />
            </div>
          </div>
          <div className="facultyInfoBodyBottom">
            <div className="left">
              <div className="imgBox">
                <img src={faculty && faculty.images && faculty.images[0].url} alt={`${faculty.firstName} ${faculty.lastName}`} />
              </div>
            </div>
            <div className="right">
              <h2>About <span>-</span><strong>{faculty && `${faculty.firstName} ${faculty.lastName}`}</strong></h2>
              <p>{faculty && faculty.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacultyInfo;
