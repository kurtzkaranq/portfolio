import React, { useState } from 'react';

export default function Second ( { data } )
{

    return (
        <div className='second'>
           
                <h3 className='text-bold text-3xl uppercase ml-48 pt-10 w-100'>
                    About me
                </h3>
                <div className='flex justify-around pt-8'>

           
                    <ul className='  about  px-5 text-xl '>
                        <li className=' hover:text-white'>test1</li>
                        <li>test2</li>
                        <li>test4</li>
                        <li>test5</li>
                    </ul>
                    <img src="/about.jpg" alt="" className='image  w-80'  />
              
            </div>
        </div>
    );
}
