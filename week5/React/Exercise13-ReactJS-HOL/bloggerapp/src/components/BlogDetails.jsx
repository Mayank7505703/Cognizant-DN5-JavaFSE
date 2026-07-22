import React from "react";

const BlogDetails = () => {

    const blogs = [

        {
            id: 1,
            title: "React Basics",
            writer: "Mayank"
        },

        {
            id: 2,
            title: "Spring Boot REST API",
            writer: "John"
        },

        {
            id: 3,
            title: "Java Collections",
            writer: "Alex"
        }

    ];

    return (

        <div>

            <h2>Blog Details</h2>

            <ul>

                {

                    blogs.map(blog => (

                        <li key={blog.id}>

                            <b>{blog.title}</b> - {blog.writer}

                        </li>

                    ))

                }

            </ul>

        </div>

    );

};

export default BlogDetails;