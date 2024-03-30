import React, { useState } from "react";
import Card from "./Card";

const Cards = ({courses,category}) => {

    const [likedCourses,setLikedCourses] = useState([]);
    
    // returns a list of all courses received from the API response
    const getCourses = () => {

        let allCourses = [];

        if(category === "All"){
            Object.values(courses).forEach( (courseCategory) => {
                courseCategory.forEach( (eachCourse) => {
                    allCourses.push(eachCourse);
                })
            })
            return allCourses;
        }
        else{
            return courses[category];           
        }
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) => {
                    return (
                        <Card key={course.id} course={course}
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses} />
                    );
                })
            }
        </div>
    );
}

export default Cards;