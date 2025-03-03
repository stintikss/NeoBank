import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Buisness: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <div>
            <div className='flex gap-[35px] h-[350px] items-center'>
                <div className='bg-[#f2f3f5] rounded-[35px] h-[250px] w-[600px] justify-center items-center flex' >
                    <div className='h-[100px] flex flex-col justify-center items-center'>
                       <p className='font-[600] text-[25px]'>🛠️В разработке</p> 
                        <p>Coming soon...🤫</p> 
                    </div>
                   
                </div>
            </div>
        </div>
      </>
    );
};

export default Buisness;