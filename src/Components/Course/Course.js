import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { picture, name, price, description } = course;
  console.log(course.id);
  return (
    <div>
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 bg-slate-600 rounded-lg text-gray-300">
        <Link to={`/option/${course.id}`} className="space-y-4">
         
          <div className="space-y-2">
            <img
              src={picture}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs">
              <span>Course Fee: {price}$</span>
            </div>
          </div>
          <div className="space-y-2">
            <h2>{name}</h2>
            <p className="leading-snug dark:text-gray-400">
              {description.slice(0, 150)}...
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Course;