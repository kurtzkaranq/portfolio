import React, { useState } from "react";

export default function Second({ data }) {
  console.log(data.skills);
  return (
    data && (
      <div className="second">
        <h3 className="text-bold text-3xl uppercase ml-48 pt-10 w-100">
          About me
        </h3>
        <div className="flex justify-around pt-8">
          <div>
            <div className="flex ">
              <ul className="  about   text-xl ">
                {data?.skills?.frontEnd.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
              <ul className="text-xl">
                {data?.skills?.backEnd.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
            </div>
            <ul className=" pt-32 text-xl ">
              {data?.skills?.otherProgramming.map((e) => {
                return <li>{e}</li>;
              })}
            </ul>
          </div>
          {/* <img src="/about.jpg" alt="" className="image  w-80" /> */}
        </div>
      </div>
    )
  );
}
