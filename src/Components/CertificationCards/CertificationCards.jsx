import React from "react";
import "./CertificationCards.css";
import courseImg from "../../assets/Images/courseImg.png";
import time from "../../assets/Images/time.png";



const CourseCard = () => {
    return(
        <>
        <div className="course-main">
            <div className="course-container">
                <div className="course-card">
                    <img src={courseImg} alt="Course" className="course-img"/>

                    <div className="course-content">
                        <p>by Determined-instructor</p>
                        <h5>Introduction to HTML</h5>
                        <p><img src={time} alt="time"/> 2 Weeks</p>

                        <div className="course-add">
                        <div><h5>Add Credential To Your Resume</h5></div> 
                            <div className="course-load"><h5>Download Certificate</h5></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course-bar">
                <h4>Explore Certificates By Category </h4>
                <div className="certificate-1"><h4>Professional Certificates</h4></div>
                <div className="certificate-2"><h4>Free Certificates</h4></div>
            </div>
        </div>
       
        </>
    )
}

export default CourseCard;