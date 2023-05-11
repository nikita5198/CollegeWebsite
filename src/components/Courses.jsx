
import React from 'react';

const Courses = () => {
  return (
    <div className="courses-section">
      <h1>Courses</h1>
      <hr style={{border:"1px dashed grey"}}/>
      <div className="course-boxes">
        <div className="course-box">What After 12th Class</div>
        <div className="course-box">Medical College Councelling</div>
        <div className="course-box">Engineer College Councelling</div>
        {/* Add more course boxes here */}
      </div>
      <div className="course-boxes">
        <div className="course-box">Best way to become a Scientist</div>
        <div className="course-box">Medical</div>
        <div className="course-box">Best way to become a Actor</div>
        {/* Add more course boxes here */}
      </div>
      <div className="course-boxes">
        <div className="course-box">Career in Finance</div>
        <div className="course-box">Career in Aviation sector</div>
        <div className="course-box">Jobs in 2020</div>
        {/* Add more course boxes here */}
      </div>
    </div>
  );
};

export default Courses;
