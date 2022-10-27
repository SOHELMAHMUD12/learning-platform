import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";
// import { AuthContext } from "./Context/UserContext";

const CheekOut = () => {
  const { user } = useContext(AuthContext);
  const info = useLoaderData();
  console.log(info)
;
  return (
    <div className=" h-screen">
      <div className=" w-80 mx-auto text-center bg-slate-300 rounded-lg ">
        <h2 className="text-2xl font-bold text-center">User Information</h2>

        <div className="">
          <p className="text-center">
            <img
              className="rounded-xl mx-auto w-16"
              src={user.photoURL}
              alt=""
            />
          </p>
        </div>
        <div>
          <span className="py-auto text-lg font-bold">{user.displayName}</span>
        </div>
      </div>
      <div>
        <p className="text-center relative bg-slate-200 uppercase font-bold w-96 mx-auto mt-4 py-5 rounded-2xl text-5xl">
          {info.name}{" "}
          <span className="text-lg absolute top-0 right-2">${info.price}</span>
        </p>
      </div>
    </div>
  );
};

export default CheekOut;
