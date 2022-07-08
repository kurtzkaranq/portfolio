import React from 'react';
import { useEffect, useState } from "react";

export default function Main ( { data } )
{

    return (
        data &&
        <div className="flex text-start  main first">
            <div className=" content-center ml-52  flex-row">
                <h1 className="text-4xl font-semibold m-auto animate-charcter">
                    Hi my name is { data.name }
                </h1>
                <h3 className="font-semibold text-3xl animate-charcter">I'm { data.profession }</h3>
            </div>
            <div className="justify-end flex animate-charcter  ml-72">
                <span className="text-left text-9xl text-black">&lt;/&gt;</span>
                </div>
                <hr className='hr' />

                {/* <hr  className='hr'/> */}
        </div>
    );
}
