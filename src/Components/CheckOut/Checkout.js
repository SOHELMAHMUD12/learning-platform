import React from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";

const CheekOut = () => {
  const { user } = useContext(AuthContext);
  const info = useLoaderData();
  console.log(user);
  return (
    <div className=" h-screen">
      <div className=" w-80 mx-auto mt-10 text-center bg-slate-300 rounded-lg ">
        <h2 className="text-2xl font-bold text-center">User Information</h2>
        <div className="">
          <p className="text-center">
            <img
              className="rounded-full mx-auto"
              src={user.photoURL}
              alt="user.photoURL"
            />
          </p>
          <span className="py-auto text-lg font-bold">Name:{user.displayName}</span>
          <p className="text-center uppercase font-bold  mt-1   text-2xl">
         {user.providerId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheekOut;
