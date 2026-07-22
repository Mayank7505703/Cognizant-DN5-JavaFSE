import React from "react";

const CourseDetails = () => {

    const courses = [

        {
            id: 1,
            name: "Java FSE",
            duration: "8 Weeks"
        },

        {
            id: 2,
            name: "React",
            duration: "6 Weeks"
        },

        {
            id: 3,
            name: "Spring Boot",
            duration: "5 Weeks"
        }

    ];

    return (

        <div>

            <h2>Course Details</h2>

            <ul>

                {

                    courses.map(course => (

                        <li key={course.id}>

                            <b>{course.name}</b> - {course.duration}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

};

export default CourseDetails;