import React from "react";
// import '../style/header.css'
export default function Header() {
  return (
    <div className="flex W-100 justify-around text-gray-400 header-character header pb-3">
      <h5>ERKHES MENDBAYAR</h5>
      <div className=" justify-evenly  w-72 ">
        <a href="" className=" w-20 mr-10">
          PROFILE
        </a>
        <a href="" className="mr-10">
          WORK
        </a>
        <a href="" className="mr-10">
          CONTACT
        </a>
      </div>
    </div>
  );
}
