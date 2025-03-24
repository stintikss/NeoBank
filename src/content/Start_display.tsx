import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Start: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <div className='w-full h-screen flex justify-center items-center'>
            <img 
                className="drop-shadow-[0_0_10px_#aaaae8] h-[180px] animate-pulse-custom"
                src='/LOGO (1).svg'
                alt="Logo"
            />
        </div>

        {/* Анимация через Tailwind */}
        <style>
          {`
            @keyframes pulse-custom {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.2); opacity: 1; }
                100% { transform: scale(1); opacity: 1; }
            }

            .animate-pulse-custom {
                animation: pulse-custom 1.5s infinite ease-in-out;
            }
          `}
        </style>
      </>
    );
};

export default Start;