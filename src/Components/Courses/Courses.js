import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1">
      <div className=" h-full w-full mx-auto bg-slate-600 rounded-xl ">
        <h1 className="text-center text-3xl my-7 font-bold  text-slate-200  ">
          Courses Options
        </h1>
        <div className="mb-5 grid grid-cols-1 mx-auto">
          {courses.map((course, index) => (
            <p
              key={index}
              className="py-5 font-bold mb-4 text-center bg-slate-700 text-gray-300 rounded-lg "
            >
              <Link to={`/option/${course.id}`}>
                <span className="">{course.name}</span>
              </Link>
            </p>
          ))}
        </div>
      </div>
      <div className=" col-span-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 my-10 mx-5">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;